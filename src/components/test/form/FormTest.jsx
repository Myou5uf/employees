import React from 'react';
import {Button, Form} from "react-bootstrap";

class FormTest extends React.Component {

    constructor(props) {
        super(props);

        this.myRef = React.createRef()
    }


    focusFirstInput = () => {
        if (this.myRef) {
            this.myRef.focus();
        }
    }

    setInputRef = (elem) => {
        this.myRef = elem;
    }

    componentDidMount() {
        // this.myRef.current.focus();
    }

    render() {
        return (
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input ref={this.setInputRef} type="email" className="form-control" id="exampleInputEmail1"
                           aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onClick={this.focusFirstInput} type="password" className="form-control"
                           id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default FormTest;