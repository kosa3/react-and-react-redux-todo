import React from 'react'

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <span>Show: </span>
                <button
                    onClick={this.props._handleClickButton}
                    disabled={this.props.visible === 'all'}
                    data-active={"all"}
                    style={{
                        marginLeft: '4px',
                    }}
                >All</button>
                <button
                    onClick={this.props._handleClickButton}
                    disabled={this.props.visible === 'active'}
                    data-active={"active"}
                    style={{
                        marginLeft: '4px',
                    }}
                >Active</button>
                <button
                    onClick={this.props._handleClickButton}
                    disabled={this.props.visible === 'completed'}
                    data-active={"completed"}
                    style={{
                        marginLeft: '4px',
                    }}
                >Completed</button>
            </div>
        )
    }
}

export default Footer
