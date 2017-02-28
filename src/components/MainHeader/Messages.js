import React, {PropTypes} from 'react'

import GenericDropdown from './GenericDropdown'

const Messages = props => {
  return (
    <GenericDropdown
      {...props}
      iconClass='fa fa-envelope-o'
      labelClass='label label-success'
      className='messages-menu'
      >
      {props.children}
    </GenericDropdown>
  )
}

Messages.propTypes = {
  open: PropTypes.bool.isRequired,
  label: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  onToggle: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  onClickFooter: PropTypes.func.isRequired,
  children: PropTypes.node
}

export default Messages
