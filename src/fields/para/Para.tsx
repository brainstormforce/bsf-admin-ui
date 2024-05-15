import React from 'react';

// Define the props interface for the Heading component
interface HeadingProps {
  text: string;
  className?: string;
}

// Define the para component
const Para: React.FC<HeadingProps> = ({ text, className }) => {

  return <section><p className={className}>{text}</p></section>;
};

export default Para;
