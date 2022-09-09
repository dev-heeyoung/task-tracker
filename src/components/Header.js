import React from 'react'
import PropTypes from 'prop-types'

import Button from './Button'

const Header = ({ title, addFormState, onToggle }) => {
  return (
  <div className="flex mx-auto justify-between mx-3 mb-3">
    <h1 className="font-bold text-xl">{title}</h1>
    <Button color={addFormState? 'bg-red-700' : 'bg-green-700' } text={addFormState? 'Close' : 'Add'} onClick={onToggle}/>
  </div>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = { 
    title: PropTypes.string.isRequired,
}

export default Header