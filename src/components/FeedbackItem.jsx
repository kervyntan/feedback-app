import React from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa';

function FeedbackItem(props) {
    // store function you want to use in onclick's arrow f(n)'s return statement
    // otherwise it'll just execute your function upon click/load of the page
    // onClick={() => props.handleDelete(props.item.id)}
  return (
    <Card>
        <div className='num-display'> {props.item.rating} </div>
        <button onClick={() => props.handleDelete(props.item.id)} className="close">
        <FaTimes color='purple'/>
        </button>
        <div className='class-display'> {props.item.text} </div>
    </Card>
  )
}

FeedbackItem.propTypes ={
    item : PropTypes.object.isRequired,

}

export default FeedbackItem