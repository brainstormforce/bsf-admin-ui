import React from 'react';

// Define the props interface for the AdminNavbar component
interface AdminNavbarProps {
  children: React.ReactNode; // Allow any children to be rendered inside the AdminNavbar
}

// Define the AdminNavbar component
const Nav: React.FC<AdminNavbarProps> = ({ children }) => {
  return (
    <div className="admin-navbar">
      <div>First Nested Div</div>
      <div>Second Nested Div</div>
      {children} {/* Render any additional children passed to AdminNavbar */}
    </div>
  );
};

// Example usage of the AdminNavbar component
const ExampleAdminNavbar: React.FC = () => {
  return (
    <Nav>
      <div>Child Component 1</div>
      <div>Child Component 2</div>
    </Nav>
  );
};

export default Nav;
