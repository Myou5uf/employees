import React from 'react';

const DynamicGreating = (props) => {
    return (
        <div className={"mt-3 mb-3 p-3 text-center border border-" + props.color}>
            {React.Children.map(props.children, (child) => {
                return React.cloneElement(child, {
                    className: "shadow p-3 m-3 border rounded"
                })
            })}
        </div>
    );
};

export default DynamicGreating;