import Header from "./components/Header.jsx";
import FeedbackList from "./components/FeedbackList.jsx";
import FeedbackData from "./data/FeedbackData.js";
import React from 'react';
import {useState} from 'react';

function App() {

    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete this?')){
            setFeedback(feedback.filter((item) => item.id !== id)); // prop drilling lesson(last part)
        }
    }
    return (
        <>
        <Header bgColor='rgba(0,0,0,0.4)' textColor='#ff6a95' />
        <div className="container">
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
        </div>
        </>
    )
}

export default App;