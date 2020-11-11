import React, { Component } from 'react';

class History extends Component {

    render() {
        const history = this.props.history;
        let i = 1;
        return (
            <div>
                <p>History</p>
                <ul>
                    {history.map((history) => (
                        <div key={i}>
                            <li key={i++}>{history}</li>
                        </div>
                    ))}
                </ul>
            </div>
        );
    };
};//end class

export default History;