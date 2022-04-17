import React from 'react'
import PropTypes from 'prop-types'

function Header( { text, bgColor, textColor } ) {
    const headerStyles = {
        backgroundColor :  bgColor,
        color : textColor,
    }
    return (
      // all css styling with hyphen become camel casing
      // eg. background-color --> backgroundColor
    <header style={headerStyles}>
        <div className='container'>
            <h2>{text}</h2>
        </div>    
    </header>
  )
}

Header.defaultProps = {
    text : 'Feedback UI',
    bgColor : 'rgba(0,0,0,0.4)',
    textColor : '#ff6a95'
}


//propTypes -> restricts the prop passed as a specific type of variable
// rejects any other form of value passed in (eg. PropType is string, pass in integer, throws error)
Header.propTypes = {
    text : PropTypes.string,
    bgColor : PropTypes.string,
    textColor : PropTypes.string,
}
export default Header