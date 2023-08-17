import { useContext } from "react"
import { ColorContext } from "./App3"


function MyTheme(){

    const myColor = useContext(ColorContext)

const theme = {
    backgroundColor: myColor ? 'pink' : 'blue',
    color: myColor ? 'black' : 'white',
    padding: '100px',
    margin: '100px'

}


    return(
        <div style={theme}>
            <p>MY BLOCK</p>
        </div>
    )
}

export default MyTheme