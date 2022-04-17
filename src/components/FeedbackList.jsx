import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

function FeedbackList({feedback, handleDelete}) {
    if (!feedback || feedback.length === 0) {
        return <p>No feedback present.</p>
    }

    const feedbackLoop = (item) => {
        return <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
    }
    // map method -> so each item in the array goes through the function feedbackLoop
    // item of the array is passed into the function
    // item of the array is then passed as a prop to the FeedbackItem component

  return (
    <div className="feedback-list">
        {feedback.map(feedbackLoop)} 
    </div>
  )
}

FeedbackList.propTypes = {
    feedback : PropTypes.arrayOf 
}

export default FeedbackList