/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './Card.css'
import Modal from '../Modal/Modal';
import { useState } from 'react';

const Card = ({id, name, profilePic, specialty, rating}) => { 

const [showModal, setShowModal] = useState(false)

const handleClose = () => {
    setShowModal(false)
}

  return (
    <>  
        <div className="card">
            <div className="number">
                {id}
            </div> 

            <div>
                <img className="profile-pic" src={profilePic} alt="profile picture" />
            </div>

            <div className="descr">
                <p className="name">{name}</p>
                <button className="learn-more" onClick={() => setShowModal(true)}>Click to learn more</button>
            </div>
        </div>
 
         {showModal && <Modal name={name} rating={rating} specialty={specialty} profilePic={profilePic} handleClose={handleClose}/>}
    </>
  )
}

export default Card;
