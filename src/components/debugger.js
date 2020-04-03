import * as React from "react";
import { AppData } from "./appdata";
import helpers from "./helpers";

const axios = require("axios").default;

class Debugger extends React.Component {
static contextType = AppData; // ***** access via this.context

  constructor(props){
    super(props);
    this.state = {
      ua: {},
      ip: "",
      ipData: {},
      parsedUa: "",
      parsedIp: "",
      screenData: ""
    };
    this.escFunction = this.escFunction.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  escFunction(event){
    if(event.keyCode === 27) {
      //Do whatever when esc is pressed
      alert(this.state.ip);
    }
  }
  updateDimensions(event) {
    var screenData = helpers.getScreenData();
    this.setState({ screenData: helpers.parseOmatic(screenData) });    
    helpers.allParsed = "";
    helpers.childCounter = 0;
  };

  componentDidMount(){
    var userIp = "";
    var ipAddress = "";
    var ipData = {};
    const self = this;
    const http = require('http');

    var uaGetString = "http://api.userstack.com/detect?access_key=b301331f9e5761edf368d241475b4836&ua=" + navigator.userAgent;
    axios.get(uaGetString)
    .then(function (response) {
        console.log(response);
        self.setState({ ua: response.data, parsedUa: helpers.parseOmatic(response.data) });
    })
    .catch(function (error) {
        console.log(error);
        self.setState({ ua: false })
    })
    .finally(function () {
        // always executed
        helpers.allParsed = "";
        helpers.childCounter = 0;
    });
    
    http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
      resp.on('data', function(ip) {
        console.log("My public IP address is: " + ip);

        var ipGetString = "http://api.ipstack.com/" + ip + "?access_key=440420267b2d228f92803e8a2d074666"
        axios.get(ipGetString)
        .then(function (response) {
            console.log(response);

            self.setState({ ip: response.data.ip, ipData: response.data, parsedIp: helpers.parseOmatic(response.data) })
        })
        .catch(function (error) {
            console.log(error);
            self.setState({ ip: false, ipData: false })
        })
        .finally(function () {
            // always executed
            helpers.allParsed = "";
            helpers.childCounter = 0;
        });

      });
    });

    this.updateDimensions();

    document.addEventListener("keydown", this.escFunction, false);
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.escFunction, false);
    window.removeEventListener('resize', this.updateDimensions);
  }
  render(){
      //console.log("rendering...");
    const context = this.context;
    const debuggerClass = context.debuggerVisible
      ? "res-user-data active"
      : "res-user-data";

    return (   
        <div className={debuggerClass}>
            <article className="pretty-scroll">
                { this.state && this.state.parsedUa && 
                    <div className="panel-col">
                        <h4>User Agent Data</h4>
                        <dl className="parsed-ua" dangerouslySetInnerHTML={{ __html: this.state.parsedUa }}></dl>
                    </div> }
                { this.state && this.state.parsedIp && 
                    <div className="panel-col">
                        <h4>IP Data for ( {this.state.ip} )</h4>
                        <dl className="parsed-ip" dangerouslySetInnerHTML={{ __html: this.state.parsedIp }}></dl>
                    </div> }
                { this.state && !this.state.ip && 
                    <div className="panel-col">
                        <h4>IP Data for ( BLOCKED )</h4>
                        <p>Your VPN has successfully prevented my IP lookup! ... Or I'm just not trying hard enough.</p>
                    </div> }
                { this.state && this.state.screenData && 
                    <div className="panel-col">
                        <h4>Screen Data</h4>
                        <dl className="parsed-screen" dangerouslySetInnerHTML={{ __html: this.state.screenData }}></dl>
                    </div> }
            </article>
        </div>
    )
  }
}

export default Debugger;