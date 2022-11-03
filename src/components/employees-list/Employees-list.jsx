import React from 'react';
import './Employees-list.css';
import EmployeesListItem from "../employees-list-item/Employees-list-item";

const EmployeesList = ({users, onRemove, onToggleProp}) => {
    return (
        <ul className="app-list list-group">
            {users.map(user =>
                <EmployeesListItem
                    key={user.id}
                    name={user.name}
                    salary={user.salary}
                    increase={user.increase}
                    rise={user.rise}
                    onRemove={() => onRemove(user.id)}
                    onToggleProp={(e) => onToggleProp(user.id, e.currentTarget.getAttribute("data-toggle"))}
                />
            )}
        </ul>
    );
};

export default EmployeesList;

