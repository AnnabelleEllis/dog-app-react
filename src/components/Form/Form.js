import React, { useState } from 'react';
import './Form.css';

const Form = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredStatus, setEnteredStatus] = useState('');
    const [error, setError] = useState();

    const nameChangeHandler = (e) => {
        setEnteredName(e.target.value);
    }

    const statusChangeHandler = (e) => {
        setEnteredStatus(e.target.value);
        console.log(e.target.value);
    }

    const editDataHandler = (e) => {
        e.preventDefault();

        if (!((enteredName.trim().length === 0) || (enteredStatus.trim().length === 0))){
            setError(true);
            console.log("It has entered in this if statement");
            console.log((enteredStatus.trim().length === 0));
            return;
        }

        const doggyData = {
            name: enteredName,
            status: enteredStatus
        }
        
        console.log(enteredName);
        console.log(enteredStatus);
        props.onSaveDogName(doggyData);
        
        setEnteredName('');
        setEnteredStatus('');
        setError(false);
    }

    const nameForm = props.editNameForm;
    console.log(nameForm)

    const statusForm = props.editStatusForm;
    console.log(statusForm)

    return (
        <div className='form-container'>
            <form className='edit-form' onSubmit={editDataHandler}>
                {
                    error && (
                        <p className='edit-form__error'>Field cannot be empty</p>
                    )
                }
                <h1>Edit details</h1>
                <fieldset>
                    { nameForm ? (
                        <>
                            <label htmlFor='display-name'>Enter a new display name</label>
                            <input type='text' value={enteredName} onChange={nameChangeHandler} id='display-name' placeholder='Display name' />
                        </>
                    ) : (
                        <>
                            <label htmlFor='display-status'>Enter a new status</label>
                            <textarea type='text' value={enteredStatus} onChange={statusChangeHandler} id='display-status' placeholder='Display status' />
                        </>
                    )}
                </fieldset>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;