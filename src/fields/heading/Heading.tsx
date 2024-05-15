import React from 'react';

// Define the props interface for the Heading component
interface HeadingProps {
  text: string;
  level?: number;
  className?: string;
}

// Define the Heading component
const Heading: React.FC<HeadingProps> = ({ text, level = 1, className }) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements; // Dynamic heading tag based on level prop

  return <HeadingTag className={`${className} m-11`}>Heading tag {level} : {text}</HeadingTag>;
};

// Example usage of the Heading component
const ExampleHeadingComponent: React.FC = () => {
  return (
    <div>
      <Heading text="Hello World" />
      <Heading text="Hello TypeScript" level={2} className="custom-heading" />
    </div>
  );
};

export default Heading;
