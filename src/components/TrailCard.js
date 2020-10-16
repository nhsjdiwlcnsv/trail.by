import React from "react";
import '../css/trailCard.css'


class TrailCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title,
            region: this.props.region,
            type: this.props.type,
            distance: this.props.distance,
            background: this.props.background,
        }
    }

    render () {
        return (
            <div className="card">
                <div className="top-background">
                    <img alt="background" src={this.state.background}/>
                    <div className="title-container">
                        <p className="title">{this.state.title}</p>
                    </div>
                </div>
                <div className="bottom-content">
                    <div className="params">
                        <div className="param-section">
                            <p className="param-title">Region</p>
                            <p className="param-value" id="region">{this.state.region}</p>
                        </div>
                        <div className="param-section">
                            <p className="param-title">Type</p>
                            <p className="param-value" style={{color: this.state.type === "Forest" ? "#00BC71" : "#8BBC00"}}>
                                {this.state.type}
                            </p>
                        </div>
                        <div className="param-section">
                            <p className="param-title">Distance</p>
                            <p className="param-value" id="distance">{this.state.distance}</p>
                        </div>
                    </div>
                    <div className="see-more-link">
                        <a className="see-more-card" href="/">See more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default TrailCard