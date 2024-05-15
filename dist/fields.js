import React from 'react';

// Define the Heading component
const Heading = ({ text, level = 1, className }) => {
    const HeadingTag = `h${level}`; // Dynamic heading tag based on level prop
    return React.createElement(HeadingTag, { className: `${className} m-11` },
        "Heading tag ",
        level,
        " : ",
        text);
};

// Define the para component
const Para = ({ text, className }) => {
    return React.createElement("section", null,
        React.createElement("p", { className: className }, text));
};

export { Heading, Para };
