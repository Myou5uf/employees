import React from 'react';
import DynamicGreating from "../dynamicGreating/DynamicGreating";

const HelloGreating = () => {
    return (
        <div style={{width: "600px", margin: "0 auto", color: "red"}}>
            <DynamicGreating color="primary">
                <h2>Hello World!</h2>
            </DynamicGreating>
        </div>
    );
};

export default HelloGreating;