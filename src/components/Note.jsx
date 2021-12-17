import React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

function Note(props) {
  function fnhandler() {
    return props.delete(props.at);
  }

  return (
    <>
      <div className="note">
        <h2>{props.title}</h2>
        <div className="wrapper">
          <p>{props.content}</p>

          <DeleteOutlineIcon className="deleteicon" onClick={fnhandler} />
        </div>
      </div>
    </>
  );
}
export default Note;
