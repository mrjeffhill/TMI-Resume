import * as React from "react";
import ReactDOM from "react-dom";
import { AppData } from "./appdata";
import helpers from "./helpers";
//import mapHelpers from "./mapHelpers";

const google = window.google;
const BobsMyUncle = [
  {
    featureType: "all",
    elementType: "all",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "administrative.country",
    elementType: "all",
    stylers: [{ visibility: "on" }]
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [{ color: "#ff0000" }]
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#3a3535" }]
  },
  {
    featureType: "administrative.province",
    elementType: "all",
    stylers: [{ visibility: "on" }]
  },
  {
    featureType: "administrative.province",
    elementType: "labels.text.fill",
    stylers: [{ color: "#ff0000" }]
  },
  {
    featureType: "administrative.province",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#3a3535" }]
  },
  {
    featureType: "administrative.locality",
    elementType: "all",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#ffffff" }]
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.stroke",
    stylers: [
      { color: "#756151" },
      { lightness: "15" },
      { saturation: "2" },
      { gamma: "3.67" }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "all",
    stylers: [{ visibility: "simplified" }]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [{ visibility: "simplified" }, { color: "#f0af54" }]
  },
  {
    featureType: "road.highway",
    elementType: "labels.text",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "road.highway",
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "all",
    stylers: [{ visibility: "simplified" }]
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry.fill",
    stylers: [{ visibility: "simplified" }, { color: "#f0af54" }]
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "labels.text",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "road.arterial",
    elementType: "all",
    stylers: [{ visibility: "simplified" }]
  },
  {
    featureType: "road.arterial",
    elementType: "geometry.fill",
    stylers: [{ visibility: "simplified" }, { color: "#d2c1a5" }]
  },
  {
    featureType: "road.arterial",
    elementType: "labels",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "road.local",
    elementType: "all",
    stylers: [{ visibility: "simplified" }]
  },
  {
    featureType: "road.local",
    elementType: "geometry.fill",
    stylers: [{ color: "#c4a983" }, { visibility: "simplified" }]
  },
  {
    featureType: "road.local",
    elementType: "labels",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [{ visibility: "off" }, { color: "#e3ce9f" }]
  },
  {
    featureType: "water",
    elementType: "geometry.stroke",
    stylers: [{ visibility: "simplified" }]
  },
  {
    featureType: "water",
    elementType: "labels",
    stylers: [{ visibility: "off" }]
  }
];

class Commute extends React.Component {
  static contextType = AppData; // ***** access via this.context

  constructor(props) {
    super(props);
    this.state = {
      mapIsReady: false,
      myLoc: {},
      googleMap: {},
      jeffMarker: {},
      jeffInfo: {},
      commuteStatusMsg: "",
      preCalc: true,
      isCalculating: false
    };
    this.getCommute = this.getCommute.bind(this);
  }
  componentWillMount() {
    window.onload = this.setState({
      mapIsReady: true,
      myLoc: this.context.myLatLng
    });
  }
  componentDidMount() {
    if (this.state.mapIsReady) {
      // Display the map
      this.map = new google.maps.Map(document.getElementById("Commute"), {
        center: this.state.myLoc,
        zoom: 14,
        disableDefaultUI: true,
        backgroundColor: "hsla(0, 0%, 0%, 0)",
        styles: BobsMyUncle
      });
      var map = this.map;

      var contentString = '<div class="info-window"><h4>Me</h4></div>';
      this.infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      var infowindow = this.infowindow;
      this.marker = new google.maps.Marker({
        position: this.state.myLoc,
        map: map,
        title: "Me",
        animation: google.maps.Animation.DROP,
        icon: {
          url:
            "https://icons.iconarchive.com/icons/icons-land/vista-map-markers/128/Map-Marker-Push-Pin-2-Right-Chartreuse-icon.png",
          scaledSize: new google.maps.Size(64, 64)
        }
      });
      var marker = this.marker;
      google.maps.event.addListener(marker, "click", function() {
        infowindow.open(map, this);
      });

      this.setState({
        googleMap: map,
        jeffMarker: marker,
        jeffInfo: infowindow
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {}
  componentDidUpdate(prevProps, prevState) {}

  getCommute(event) {
    //console.log("Get Commute");

    this.setState({
      commuteStatusMsg: "One moment, while some math happens...",
      preCalc: false,
      isCalculating: true
    });

    /*
      I'm aware that this is a complete mess.
    */
    var myLoc = this.state.myLoc;
    var mapObject = this.map;
    var commuteResult = (status, preCalc, msg) => {
      this.setState({
        commuteStatusMsg: msg,
        preCalc: preCalc,
        isCalculating: status
      });
    };

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          var service = new google.maps.DistanceMatrixService();
          service.getDistanceMatrix(
            {
              origins: [pos],
              destinations: [myLoc],
              travelMode: "DRIVING",
              unitSystem: google.maps.UnitSystem.IMPERIAL,
              avoidHighways: false,
              avoidTolls: false
            },
            function(response, status) {
              if (status !== "OK") {
                // BOO
                alert("Error was: " + status);
              } else {
                // YAY

                //console.log("get distance response" + response);

                var origin = response.originAddresses[0];
                var destination = response.destinationAddresses[0];
                // {text: "308 ft", value: 94}
                var distance = response.rows[0].elements[0].distance;
                // {text: "1 min", value: 40}
                var time = response.rows[0].elements[0].duration;
                var miles = helpers.getMiles(distance.value);
                //console.log(originList);

                var destContentString =
                  '<div class="info-window"><h4>You</h4></div>';
                var destInfowindow = new google.maps.InfoWindow({
                  content: destContentString
                });
                var destMarker = new google.maps.Marker({
                  position: pos,
                  map: mapObject,
                  title: "You",
                  animation: google.maps.Animation.DROP,
                  icon: {
                    url:
                      "https://icons.iconarchive.com/icons/icons-land/vista-map-markers/256/Map-Marker-Push-Pin-2-Left-Azure-icon.png",
                    scaledSize: new google.maps.Size(64, 64)
                  }
                });
                google.maps.event.addListener(destMarker, "click", function() {
                  destInfowindow.open(mapObject, this);
                });

                let output =
                  "Your current location <strong>( " +
                  origin +
                  " )</strong> is about " +
                  miles +
                  " miles away. <br />Google thinks it would take me about <strong>" +
                  time.text +
                  "</strong> to get there. I'm pretty sure I could do it in less!";

                commuteResult(false, false, output);

                var directionsService = new google.maps.DirectionsService();
                var directionsRequest = {
                  origin: origin,
                  destination: destination,
                  travelMode: google.maps.DirectionsTravelMode.DRIVING,
                  unitSystem: google.maps.UnitSystem.METRIC
                };

                directionsService.route(directionsRequest, function(
                  response,
                  status
                ) {
                  if (status == google.maps.DirectionsStatus.OK) {
                    new google.maps.DirectionsRenderer({
                      map: mapObject,
                      directions: response,
                      suppressMarkers: true,
                      polylineOptions: {
                        strokeColor: "#232020",
                        strokeOpacity: ".7",
                        strokeWeight: "6"
                      }
                    });
                    //mapObject.setCenter(mapObject.bounds.getCenter()); //.fitBounds(map.getBounds(), 50);
                    mapObject.fitBounds(mapObject.getBounds(), 50);
                  } else {
                    //$("#error").append("Unable to retrieve your route<br />");
                    var output = "Google says no. Try again?";
                    commuteResult(false, true, output);
                    console.log("directions response: " + response);
                  }
                });
              }
            }
          );
        },
        function() {
          //handleLocationError(true, infoWindow, map.getCenter());
          var output = "Well that's awkward. Try again?";
          commuteResult(false, true, output);
        }
      );
    } else {
      // Browser doesn't support Geolocation
      var output = "Your browser does not support Geolocation. Sad!";
      commuteResult(false, false, output);
    }
  }

  render() {
    //console.log(this.context.introVisible);
    const context = this.context;

    const mapActiveClass = context.mapVisible
      ? "res-map full-view active"
      : "res-map full-view";
    const calculateClass = this.state.isCalculating ? "thinking" : "";
    const buttonClass = this.state.preCalc ? "" : "visually-hidden";

    return (
      <div id="Map" className={mapActiveClass}>
        <div id="Commute" style={{ width: "100%", height: "100%" }}></div>
        <div className="res-map-info">
          <p className={buttonClass}>
            <button
              onClick={e => {
                this.getCommute(e);
              }}
            >
              Get Commute
            </button>
          </p>
          <p
            className={calculateClass}
            dangerouslySetInnerHTML={{ __html: this.state.commuteStatusMsg }}
          ></p>
        </div>
      </div>
    );
  }
}

export default Commute;
