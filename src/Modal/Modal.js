
import './style.css';

const Modal = () =>{
    return(
        <div className="modal">
            <div className='overlay' onClick = { closeModal } >
                { children }
            </div>
        </div>

    )
}

export default Modal;