
   import React from "react";
   import ProgressBar from "react-bootstrap/ProgressBar";

   const Progress = () => {
      return (
         <div style={{ backgroundColor: "lightgrey", overflow: "hidden" }}>
            <ProgressBar
            animated
               style={{ height: 15, background: "lightgrey" }}
               now={75}
               className="progressBar"
               variant="info"
            />
         </div>
      );
   };

   export default Progress;