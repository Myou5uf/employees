import React from 'react';
import './App-filter.css';

const AppFilter = ({filter, setFilter}) => {

    const buttonsData = [
        {name: 'all', label: "Все сотрудники"},
        {name: 'rise', label: "На повышение"},
        {name: 'moreThen1000', label: "З/П больше 1000$"}
    ]

    return (
        <div className="btn-group">
            {buttonsData.map(btn => {
                const active = filter === btn.name;
                const classes = active ? "btn-light" : "btn-outline-light";
                return (
                    <button
                        key={btn.name}
                        className={`btn ${classes}`}
                        type="button"
                        onClick={() => setFilter(btn.name)}
                    >
                        {btn.label}
                    </button>
                )
            })}
        </div>
    );
};

export default AppFilter;