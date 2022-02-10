import React, { useState } from "react";


function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  const [isExpanded,setIsExpanded]=useState(false);
  function expand(){
      setIsExpanded(true);
  }

  return (
    <div>
      <form>
        {isExpanded?<input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />:null}
        <textarea
          onClick={expand}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded?"3":"1"}
        />
        
        <button onClick={submitNote}>Add</button>
        
      </form>
    </div>
  );
}

export default CreateArea;
