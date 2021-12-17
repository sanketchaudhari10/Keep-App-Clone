import React, { useState } from "react";
import AddCircle from "@material-ui/icons/AddCircle";

function NewNote(props) {
  const [cnote, setcnote] = useState({
    title: "",
    content: "",
  });

  const [expanddisp, setexpanddisp] = useState(false);

  function inputevent(event) {
    const value = event.target.value;
    const name = event.target.name;
    setcnote((prevvalues) => {
      return { ...prevvalues, [name]: value };
    });
  }
  function midfn() {
    props.passnote(cnote);
    setcnote({
      title: "",
      content: "",
    });
  }
  function expandNewnote() {
    setexpanddisp(true);
  }
  function shrink() {
    setexpanddisp(false);
  }
  return (
    <>
      <div className="newnote" onDoubleClick={shrink}>
        {expanddisp ? (
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={inputevent}
            value={cnote.title}
          />
        ) : null}

        <div className="wrapper">
          <textarea
            className="textarea"
            name="content"
            value={cnote.content}
            onChange={inputevent}
            placeholder="Enter a keep..."
            onClick={expandNewnote}
          ></textarea>
          {/* <div
            className="textarea"
            contenteditable="true"
            aria-multiline="true"
            role="textbox"
            name="content"
            value={cnote.content}
            onChange={inputevent}
          >
            Enter a keep...
          </div> */}
          {expanddisp ? (
            <button onClick={midfn}>
              <AddCircle className="addicon"></AddCircle>
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
}
export default NewNote;
