// import React from "react"
import React from "react";

// define the ErrorMsg component
const ErrorMsg = () => {
  // return the JSX for the ErrorMsg component
  return (
    // render a div with the ErrorMsg className
    <div className='ErrorMsg'>
      {/* render a span with the error message*/}
      <span>
        Sorry ☹ Recipe Not Found <br />
        Type New Recipe Name
      </span>
    </div>
  );
};

// export the ErrorMsg component as default
export default ErrorMsg;
