import React from 'react';
import '../css/AboutInfo.css';

class AboutInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            number: this.props.number,
            email: this.props.email,
            position: this.props.position
        }
    }

    render () {
        return (
            <div className={"info-container " + this.state.position}>
                <p className="name">{this.state.name}</p>
                <div className="section">
                    <p className="header">Phone number</p>
                    <p className="number">{this.state.number}</p>
                </div>
                <div className="section">
                    <p className="header">Email</p>
                    <p className="email">{this.state.email}</p>
                </div>
            </div>
        )
    }
}

export default AboutInfo