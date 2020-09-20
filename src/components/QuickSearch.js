import React from 'react';
import '../css/QuickSearch.css'

class QuickSearch extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title,
            link: this.props.link,
        }
    }

    render () {
        return (
            <a href={this.state.link}>
                <div className="tag">
                    <p>{this.state.title}</p>
                </div>
            </a>
        )
    }
}

export default QuickSearch;