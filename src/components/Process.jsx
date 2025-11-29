import { useState } from "react";

const Circle = () => {
const [isOn,setIsOn]=useState(false)

const addIsOn = () => {
    setIsOn(!isOn)
}

return(
<>

<div className="wrapper">
    <div className={isOn? "circle on" : "circle off"} onClick={addIsOn}>
    </div>
    <h3>{isOn ? "ON" : "OFF"}</h3>
</div>

</>
)
}




export default Circle



