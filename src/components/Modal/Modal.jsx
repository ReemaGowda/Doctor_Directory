/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './Modal.css' 

const Modal = ({name, profilePic, handleClose, specialty, rating}) => {
  return (
    <div className="modal-backdrop">

        <div className="modal">
            <img className="modal-img" src={profilePic} alt="profile pic" />

            <div className="modal-body">

               <div className='modal-name'>{name}</div>
               <div className='modal-role'>{rating}</div>
               <div className="skills">{specialty}</div>

            </div>

            <button className="close-btn" onClick={()=> handleClose()}>Close</button>
        </div>

    </div>
  )
}

export default Modal;
