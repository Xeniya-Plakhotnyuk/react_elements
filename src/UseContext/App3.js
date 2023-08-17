import MyTheme from "./MyTheme"
import { useState } from "react"
import React from "react"

export const ColorContext = React.createContext()
function App3(){

    const [myColor, setMyColor] = useState(true)

    function changeColor(){
        setMyColor((myFirstColor) => !myFirstColor)
    }

    return(
    <div>
<h1>CLICK! And color will change</h1>
<ColorContext.Provider value={myColor}>
<MyTheme />
<button onClick={changeColor}>ColorChanger</button>
</ColorContext.Provider>
    </div>)
}

export default App3