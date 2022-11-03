import React from "react";
import "./App-info.css";

const AppInfo = ({ totalUsers, totalIncreaseUsers }) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании SUF</h1>
            <h2>Общее число сотрудников: {totalUsers}</h2>
            <h2>Премию получат: {totalIncreaseUsers}</h2>
        </div>
    );
};

export default AppInfo;
