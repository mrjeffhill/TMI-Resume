import * as React from "react";
import { AppData } from "./appdata";

const SectionTools = props => {
  //let { state, dispatch } = React.useContext(AppData);
  /*
$(document).on('click', '.res-editable a.can-edit', function(e) {
	e.preventDefault();
});
$(document).on('click', 'button.editable', function(e) {
	let thisSection = $(this).closest('.res-editable');
	thisSection.toggleClass('edit-active');
	let isActive = thisSection.hasClass('edit-active');
	$('.can-edit', thisSection).attr('contentEditable', isActive);
	$('.can-edit', thisSection).not('#Skills .can-edit')[0].focus();
	// todo: add revert
});
// TODO: MAERGE!!!
$(document).on('click', 'button.print-basket', function(e) {
	let thisSection = $(this).closest('.res-editable');
	thisSection.toggleClass('print-me');
});



var makeEditable = function(destEl){
	$.each(destEl, function( i, s ) {
		$(this).append(printEditTools);
	});
}
makeEditable($('#Blurbs>h2, #Doodles>h2, #Objective>h2, #Summary>h2, #Education>h2'));
  */
  return (
    <nav>
      <button className="editable">
        <span className="tooltip" data-title="Turn editing on/off.">
          Edit
        </span>
      </button>
      <button className="print-basket">
        <span className="tooltip" data-title="Add/Remove this for printing.">
          Add for Print
        </span>
      </button>
    </nav>
  );
};

export default SectionTools;
