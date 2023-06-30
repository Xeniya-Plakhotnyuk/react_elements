import './style.css';
import { Accordionitems } from './Accordionitems';
import list from './list';



function Accordion(){
    return(
<div>
{ list.map((item, index)=>
    <Accordionitems key ={index} title={item.title} content={item.content} />
)}

</div>

    )
}

export default Accordion;

