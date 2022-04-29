import React from 'react'
import PropTypes from 'prop-types';

// lecture 20
function Button({children, version, type, isDisabled}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}> 
        {children}
    </button>
  )
}

// if nothing is passed in, what values the props take
Button.defaultProps = {
    version : 'primary',
    type: 'button',
    isDisabled : false
}

Button.propTypes = {
    children : PropTypes.node.isRequired,
    version : PropTypes.string,
    type : PropTypes.string,
    isDisabled : PropTypes.bool,
}
export default Button