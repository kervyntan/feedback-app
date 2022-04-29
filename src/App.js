import Header from "./components/Header.jsx";
import FeedbackList from "./components/FeedbackList.jsx";
import FeedbackStats from "./components/FeedbackStats.jsx";
import FeedbackData from "./data/FeedbackData.js";
import FeedbackForm from "./components/FeedbackForm.jsx"
import React from 'react';
import {useState} from 'react';

function App() {

    // states should be the same if using the same content
    // eg. FeedbackStats and FeedbackList (lecture 18)

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
            <FeedbackForm />
            <FeedbackStats feedback={feedback}/>
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
        </div>
        </>
    )
}

export default App;