import React from 'react';
import "./Employees-add-form.scss";

class EmployeesAddForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            salary: ""
        }
    }

    onChangeValue = (e) => {
        e.preventDefault()

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addUser = (e) => {
        e.preventDefault();
        const {name, salary} = this.state;

        if (name !== "" && salary !== ""){
            const newUser = {...this.state};
            this.props.onAdd(newUser);
            this.setState({
                name: "",
                salary: ""
            })
        }
    }

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={(e) => this.addUser(e)}
                >
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="Как его зовут?"
                           name="name"
                           value={name}
                           onChange={(e) => this.onChangeValue(e)}
                    />
                    <input type="number"
                           className="form-control new-post-label"
                           placeholder="З/П в $?"
                           name="salary"
                           value={salary}
                           onChange={(e) => this.onChangeValue(e)}
                    />

                    <button
                        type="submit"
                        className="btn btn-outline-light"
                    >
                        Добавить
                    </button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;