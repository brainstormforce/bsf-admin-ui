# bsf-admin-ui

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: The project uses Node version `18.15.0` as specified in the package.json:
  ```json
  "volta": {
    "node": "18.15.0"
  }

TypeScript: All development is done using TypeScript.
@emotion/css: For styling the components.
Prettier: To maintain code consistency (optional but recommended).

Setting Up Your Development Environment
Clone the Repository: Clone the bsf-admin-ui repository to your local machine.

sh
Copy code
git clone https://github.com/your-username/bsf-admin-ui.git
Create a New Branch: Create a new branch from the master branch. This will be your feature branch.

sh
Copy code
cd bsf-admin-ui
git checkout -b your-feature-branch
Install Dependencies: Navigate to the root folder of the project and install the required packages.

sh
Copy code
npm install
Link the Library Locally: Link the library in your local environment. This will allow you to use the library in other projects on your machine.

sh
Copy code
npm link
Start Development Server: Start the development server to begin developing.

sh
Copy code
npm start
Using the Linked Library in Your Project
To use the locally linked library in your project, follow these steps:

Navigate to Your Project Folder: Go to the root folder of the project where you want to use the bsf-admin-ui library.

Link the Library: Link the bsf-admin-ui library to your project.

sh
Copy code
npm link bsf-admin-ui
Ensure Node Version Consistency: Make sure that the Node.js version in your project matches the version specified in the bsf-admin-ui library (18.15.0).

Development Workflow
Create Components: You can create new components in either the components directory or the settings directory depending on the type of component.

Export Components: After creating a component, make sure to export it from the index.tsx file in the appropriate directory. This makes the component available for use in other parts of the library and projects.

Using Components in Your Project: Once you have created and exported your component, you can use it in your project. Example usage:

jsx
Copy code
import { MyComponent } from 'bsf-admin-ui';

const App = () => (
  <div>
    <MyComponent />
  </div>
);
Quick Recap
In the library root folder:

sh
Copy code
npm link
In your project root folder:

sh
Copy code
npm link bsf-admin-ui
Additional Tips
Prettier: To ensure consistent code formatting, it’s recommended to use Prettier. You can set it up in your editor or run it manually before committing code.
Code Reviews: Ensure your code is reviewed by at least one other team member before merging it into the main branch.
By following this guide, you will be able to set up the development environment, link the library locally, and start contributing to the bsf-admin-ui library efficiently. Happy coding!