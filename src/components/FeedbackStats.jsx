import React from 'react'
import PropTypes from 'prop-types'
// specific prop feedback passed into function (from app.js)
function FeedbackStats({feedback}) {

    // Calculate ratings avg
    // feedback here is the array, current.rating is accessing the rating key
    // within each index's object 
    let average = feedback.reduce((accumulator, current) =>  {
        return accumulator + current.rating;
    }, 0) / feedback.length

    // fix all average values to 1 dp, replace 0 wih blank '' if there is a 0 in the value
    // eg. 8.0, 9.0
    average = average.toFixed(1).replace(/[.,]0$/, '');

    console.log(average)

    // ternary operator '?'
    // here, isNan(average) - if average === NaN, show 0, otherwise show average
  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews </h4>
        <h4>Average Rating : {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
    feedback : PropTypes.array.isRequired,
}
export default FeedbackStats