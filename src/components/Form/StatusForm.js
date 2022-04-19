import React, { useState } from 'react';
import './Form.css';

const Form = (props) => {
    const [enteredStatus, setEnteredStatus] = useState('');
    const [error, setError] = useState();

    const statusChangeHandler = (e) => {
        setEnteredStatus(e.target.value);
    }

    const editStatusHandler = (e) => {
        e.preventDefault();

        if (enteredStatus.trim().length === 0) {
            setError(true);
            return;
        }

        const doggyStatus = {
            status: editStatusHandler
        }
        
        // console.log(editStatusHandler);
        props.onSaveDogStatus(doggyStatus);
        
        setEnteredStatus('');
        setError(false);
    }

    // const nameForm = props.editNameForm;
    // console.log(nameForm)

    return (
        <div className='form-container'>
            <form className='edit-form' onSubmit={editStatusHandler}>
                {
                    error && (
                        <p className='edit-form__error'>Field cannot be empty</p>
                    )
                }
                <h1>Edit details</h1>
                <fieldset>
                    <label htmlFor='display-status'>Enter a new status</label>
                    <textarea type='text' value={enteredStatus} onChange={statusChangeHandler} id='display-status' placeholder='Display status' />          
                </fieldset>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form