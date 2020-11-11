import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

class Answers extends Component {

    render() {
        return (
            <div>
                {/* if this.props.answers is equal to '' display 0 otherwise show answer*/}
                <Typography>Answers: {this.props.answers === '' ? 0 : this.props.answers}</Typography>
            </div>
        )
    }
};//end class

export default Answers;