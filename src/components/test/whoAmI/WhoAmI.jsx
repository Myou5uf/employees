import React from 'react';

class WhoAmI extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {name, surname, years} = this.props;
        return (
            <div className="d-flex flex-column">
                <p>My name is {name}, surname - {surname}, age - {years}</p>
            </div>
        )
    }


}
export default WhoAmI;