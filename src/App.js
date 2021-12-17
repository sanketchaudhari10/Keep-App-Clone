import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewNote from "./components/NewNote";
import Note from "./components/Note";
import { useState } from "react";

function App() {
  const [listnotes, setlistnotes] = useState([]);

  function addnote(cnote) {
    setlistnotes((oldlist) => {
      // console.log("in addition => ", oldlist, "->", cnote);
      if (!oldlist) {
        oldlist = [];
      }
      return [...oldlist, cnote];
    });
  }

  function ondelete(indx) {
    // console.log("in delete ", listnotes);
    // console.log("to delete ", indx);
    setlistnotes((old) => {
      return old.filter((curr, id) => {
        return id !== indx;
      });
    });
    // console.log("after: ", listnotes);
  }

  return (
    <>
      <Header></Header>
      <NewNote passnote={addnote} list={listnotes}></NewNote>
      <div className="container">
        <div className="allnotes">
          {listnotes &&
            listnotes.map((curvalue, place) => {
              return (
                <Note
                  title={curvalue.title}
                  content={curvalue.content}
                  delete={ondelete}
                  at={place}
                  key={place}
                ></Note>
              );
            })}
          {/* <Note></Note>
          <Note></Note>
          <Note></Note>
          <Note></Note>
          <Note></Note> */}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
