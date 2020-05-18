import React, { Component } from 'react';

class AlertView extends Component {
    constructor(props) {
        super(props)
    }

    // displays error message; will need bootstrap
    render() {
        return (
            <div>
                <Alert dismissible variant="danger">
					<Alert.Heading>Sorry, we were not able to find any matches:</Alert.Heading>
                        <li>
                            Please check spelling and try again.
                        </li>
                        <li>
                            Try using the Browse All feature.
                        </li>
				</Alert>
            </div>
        )
    }
}

export default AlertView;
