import React, {useEffect, useState} from "react";
import "./Counter.css";
import {useCounter} from "../../../hooks/useCounter";

const Counter = ({count}) => {

    const counter = useCounter(-50, 50);

    return (
        <div className="test-counter">
            <div className="counter">
                {counter.value}
            </div>
            <div className="controls">
                <button onClick={counter.increment}>INC</button>
                <button onClick={counter.decrement}>DEC</button>
                <button onClick={counter.random}>random</button>
                <button onClick={counter.reset}>RESET</button>
            </div>
        </div>
    );
};

export default Counter;
