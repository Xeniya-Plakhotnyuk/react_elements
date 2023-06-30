import { useState } from "react"


export const Accordionitems = ({title, content}) =>{

const [isOpen, setIsOpen] = useState(false)

const handleOnClick =() =>{
    setIsOpen(!isOpen)
}

return(
    <div>
        <div className={isOpen ? 'active' : 'default' } onClick={handleOnClick}>
            { title }
        </div>
        {
          isOpen  && <div className="content" >

            { content }
          </div> 
        }
        
    </div>
)

}