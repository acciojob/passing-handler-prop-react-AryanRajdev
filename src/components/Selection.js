import React, { useState } from 'react'

const Selection = (props) => {

    const [bgcolor,setBgcolor] = useState("");
   
    const handleClick = ()=>{
        props.applyColor((newBgObj) => {
            setBgcolor(newBgObj.background); 
          });
    }
    

  return (
    <div>
        <div className = "fix-box" style={{height:"200px", width:"200px", border:"1px solid white", textAlign: "center", background: bgcolor}} onClick={handleClick}>
            <h2 style={{color:"white"}}>Selection</h2>
        </div>
    </div>
  )
}

export default Selection
