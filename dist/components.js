import React from 'react';

// Define the AdminNavbar component
const Nav = ({ children }) => {
    return (React.createElement("div", { className: "admin-navbar" },
        React.createElement("div", null, "First Nested Div"),
        React.createElement("div", null, "Second Nested Div"),
        children,
        " "));
};

class log {
    static success(message) {
        console.log(`%c ${message}`, 'color: green');
    }
    static error(message) {
        console.log(`%c ${message}`, 'color: red');
    }
    static warning(message) {
        console.log(`%c ${message}`, 'color: orange');
    }
}
// Create and export new function which perform addition of two numbers and return the result.
function add(a, b) {
    // return a + b;
    return `addition ${a} + ${b} = ${a + b}`;
}
// Create and export new function which perform subtraction of two numbers and return the result.
function subtract(a, b) {
    return `Result of the t ${a} - ${b} = ${a - b}`;
}

export { Nav, add, log, subtract };
