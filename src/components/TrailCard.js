import React from "react";
import '../css/TrailCard.css'
import { Link } from "react-router-dom"


const TrailCard = props => {

    let [title] = React.useState(props.title)
    let [region] = React.useState(props.region)
    let [type] = React.useState(props.type)
    let [distance] = React.useState(props.distance)
    let [background] = React.useState(props.background)
    let [trailName] = React.useState(props.trailName)

    return (
        <div className="card">
            <div className="top-background">
                <img alt="background" src={background}/>
                <div className="title-container">
                    <p className="title">{title}</p>
                </div>
            </div>
            <div className="bottom-content">
                <div className="params">
                    <div className="param-section">
                        <p className="param-title">Region</p>
                        <p className="param-value" id="region">{region}</p>
                    </div>
                    <div className="param-section">
                        <p className="param-title">Type</p>
                        <p className="param-value" style={{color: type === "Forest" ? "#00BC71" : "#8BBC00"}}>
                            {type}
                        </p>
                    </div>
                    <div className="param-section">
                        <p className="param-title">Distance</p>
                        <p className="param-value" id="distance">{distance}</p>
                    </div>
                </div>
                <div className="see-more-link">
                    <Link className="see-more-card" to={`/ecotrail/${trailName}`}>
                        See more
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default TrailCard