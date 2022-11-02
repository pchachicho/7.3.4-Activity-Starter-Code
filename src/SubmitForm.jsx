import React, { useContext } from "react";
import RequestFormButton from './RequestFormButton'
import StylesContext from './StylesContext.jsx'

export default function SubmitForm() {
  const buttonStyles = React.useContext(StylesContext)
  return (
    <div style={{display: "flex"}}>
      <form style={{display: "inline-block"}}>
        <label>
          Name of Comic:
          <input type="text" />
        </label>
        <label>
          Year of Release:
          <input type="text" />
        </label>
        <label>
          Your Email:
          <input type="text" />
        </label>

        <RequestFormButton />
      
      </form> 
    </div>
  );
}
