import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">Halloween Animes</h1>
    
    <div>
      <img className="haloween-img" src="https://m.media-amazon.com/images/I/51QnzUz+aCL.jpg" alt="Ayakashi: japanese classic horror" />
      <img className="haloween-img" src="https://m.media-amazon.com/images/M/MV5BNzE3MmQ4ZjEtYmQxNC00MWJmLWJkMGItYWQwNTk2ZmJlZTgxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg" alt="Black Butler" />
      <img className="haloween-img" src="https://static.posters.cz/image/750/poster/death-note-from-the-shadows-i58005.jpg" alt="Death Note" />
    </div>
  </div>,
  document.getElementById("root")
);
