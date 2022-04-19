import React, { Fragment, useState } from 'react';
import selectIcon from '../../svg/more.png';
import Form from '../Form/Form';
import './Dropdown.css';

const Dropdown = (props) => {
    const [isDropdownActive, setIsDropdownActive] = useState(false);
    const [nameFormIsVisible, setNameFormIsVisible] = useState(false);
    const [statusFormIsVisible, setStatusFormIsVisible] = useState(false);

    const dropDownHandler = () => {
        setNameFormIsVisible(false);
        setStatusFormIsVisible(false);
        setIsDropdownActive(!isDropdownActive);
    }

    const nameFormVisibilityHandler = () => {
        setIsDropdownActive(false);
        setNameFormIsVisible(!nameFormIsVisible);
    }
    const statusFormVisibilityHandler = () => {
        setIsDropdownActive(false);
        setStatusFormIsVisible(!statusFormIsVisible);
    }

    const newNameHandler = (dogDescriptionData) => {
        const dogData = {
            ...dogDescriptionData,
        };
        props.onSaveNewName(dogData);
    };


  return (
    <>
        <Fragment>
            { nameFormIsVisible && <Form editNameForm onSaveDogName={newNameHandler} /> }
            { statusFormIsVisible && <Form editStatusForm onSaveDogName={newNameHandler} /> }
            <div className='dropdown'>    
                <img src={selectIcon} alt='' onClick={dropDownHandler} />
                { isDropdownActive && (
                    <div className='dropdown__content'>
                        <div className='dropdown__content-item' onClick={nameFormVisibilityHandler}>Edit name</div>
                        <div className='dropdown__content-item' onClick={statusFormVisibilityHandler}>Edit status</div>
                        <div className='dropdown__content-item'>Settings</div>
                        <div className='dropdown__content-item'>Logout</div>
                    </div>
                )}   
            </div>
        </Fragment>
    </>
  )
}

export default Dropdown
                        {/* { statusFormIsVisible && <StatusForm onSaveDogStatus={newStatusHandler} /> } */}