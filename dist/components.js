import * as React from 'react';

const Button = ({ children, onClick }) => {
    return (React.createElement("button", { onClick: onClick, style: {
            padding: "10px 20px",
            fontSize: "1.2em",
            borderRadius: "5px",
            cursor: "pointer",
            backgroundColor: "blue",
            color: "white",
            border: "none",
        } }, children));
};

export { Button };
