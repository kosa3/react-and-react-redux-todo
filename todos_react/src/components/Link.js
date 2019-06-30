import React from 'react'
import PropTypes from 'prop-types'

class Link extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button
                onClick={this.bind._handleClickButton}
                disabled={active}
                style={{
                    marginLeft: '4px',
                }}
            >
                {children}
            </button>
        )
    }
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
