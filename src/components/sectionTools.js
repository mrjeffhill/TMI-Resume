import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppData } from "./appdata";

class SectionTools extends React.Component {
static contextType = AppData; // ***** access via this.context

  constructor(props){
    super(props);
    this.state = {
      printActive: false,
      editActive: false,
      toolParent: {},
      editables: []
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.togglePrint = this.togglePrint.bind(this);
  }
  componentDidMount(){
    const thisTool = ReactDOM.findDOMNode(this);
    const toolParent = thisTool.closest(".res-editable");
    const editables = toolParent.getElementsByClassName("can-edit");
    this.setState({ toolParent: toolParent, editables: editables });
  }
  toggleEdit(event){
      //console.log("toggle edit");
      var toolParent = this.state.toolParent
      var editables = this.state.editables;
      
      toolParent.classList.toggle("edit-active");

      for (let editable of editables) {
        editable.setAttribute(
          "contentEditable",
          !this.state.editActive
        );
      }
      
      this.setState({ editActive: !this.state.editActive });
  }
  togglePrint(event){
      //console.log("toggle print");
      this.state.toolParent.classList.toggle("print-me");
      this.setState({ printActive: !this.state.printActive });
  }


  render(){

    return (
      <nav>
        <button className="editable" onClick={e => {
              this.toggleEdit(e);
            }}>
          <span className="tooltip" data-title="Turn editing on/off.">
            Edit
          </span>
        </button>
        <button className="print-basket" onClick={e => {
              this.togglePrint(e);
            }}>
          <span className="tooltip" data-title="Add/Remove this for printing.">
            Add for Print
          </span>
        </button>
      </nav>
    );
  }
};

export default SectionTools;
