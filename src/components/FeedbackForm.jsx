import React from 'react'
import Card from './shared/Card'
import {useState} from 'react'
import Button from './shared/Button'
function FeedbackForm() {

    const [text, setText] = useState('')
    const [btnDisabled, setbtnDisabled] = useState(true)
    const [message, setMessage] = useState('check this out')

    // Stores the text typed inside the text bar inside a state
    // e.target.value -> gets the value as you are typing (from onChange event)
    const handleTextChange = (e) => {
        if (text === '') {
            setbtnDisabled(true);
            setMessage(null);
            // only show message if typing, and less than 10 characters
        } else if (text !== '' && text.trim().length <= 10) {
            setbtnDisabled(true);
            setMessage('Review must be at least 10 characters');
        }  else {
            setbtnDisabled(false);
            setMessage(null);
        }

        setText(e.target.value);
    }
    // onChange event (input)
  return (
    <Card>
        <form>
            <h2>How would you rate your service today?</h2>
            {/* todo - rating select component */}
            <div className='input-group'>
                <input onChange={handleTextChange} type="text" placeholder='Write a review' value={text}/>
                <Button type="submit" version='secondary' isDisabled={btnDisabled}>Send</Button>
                </div>

            {message && <div className='message'> {message} </div>}
        </form>
    </Card>
  )
}

export default FeedbackForm