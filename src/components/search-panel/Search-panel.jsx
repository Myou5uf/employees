import React from 'react';
import './Search-panel.css';

class SearchPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: ""
        };
    }

    setSearchQuery = (e) => {
        const searchQuery = e.target.value;
        this.setState({
            searchQuery: searchQuery
        });
        this.props.setSearchQuery(searchQuery);
    }

    render() {


        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={this.state.searchQuery}
                onChange={this.setSearchQuery}
            />
        );
    }

};

export default SearchPanel;