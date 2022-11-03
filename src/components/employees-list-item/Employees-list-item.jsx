import React from 'react';
import './Employees-list.item.css';

const EmployeesListItem = ({name, salary, onRemove, increase, rise, onToggleProp}) => {

    const classes = ["list-group-item d-flex justify-content-between"];

    if (increase) {
        classes.push("increase");
    }

    if (rise) {
        classes.push("like");
    }

    return (
        <li className={classes.join(" ")}>
                <span
                    className="list-group-item-label"
                    data-toggle="rise"
                    onClick={onToggleProp}
                >
                    {name}
                </span>
            <input type="text" className="list-group-item-input" defaultValue={`${salary}$`}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button
                    type="button"
                    className="btn-cookie btn-sm "
                    data-toggle="increase"
                    onClick={onToggleProp}
                >
                    <i className="fas fa-cookie"></i>
                </button>

                <button
                    type="button"
                    className="btn-trash btn-sm "
                    onClick={onRemove}
                >
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
};

export default EmployeesListItem;