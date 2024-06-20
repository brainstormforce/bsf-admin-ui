
# bsf-admin-ui

## bsf-admin-ui is made for providing UI components to ensure consistency across the bsf admin setting pages.

### Description

bsf-admin-ui is a library designed to streamline the development of user interface components for BSF (Business Setting Framework) admin settings pages. It offers a collection of reusable components built with TypeScript and styled using @emotion/css, aiming to maintain visual and functional consistency throughout the admin interface.

### Installation

As of now, you can clone this library to your local machine and link it locally:

1. **Clone the Repository**: Clone the `bsf-admin-ui` repository to your local machine.
   
   ```sh
   git clone https://github.com/your-username/bsf-admin-ui.git
   ```
2. **Navigate to Project Directory**: Enter the project directory.

   ```sh
   cd bsf-admin-ui
   ```
3. **Link the Library Locally**: Link the library in your local environment. This allows you to use the library in other projects on your machine.

```sh
npm link
```

4. **Use in Your Project**: To use the bsf-admin-ui library in your project, navigate to your project folder and link it:

    ```sh
    npm link bsf-admin-ui
    ```
    - For components, import them like this:
        
        ```javascript
        import { Button } from 'bsf-admin-ui/components';
        ```
    - For settings components, import them like this:
        
        ```javascript
        import { Button } from 'bsf-admin-ui/settings';
        ```

# Contributing to bsf-admin-ui

Thanks for your interest in contributing to bsf-admin-ui. We're happy to have you here.

Please take a moment to review this document before submitting your first pull request. We also strongly recommend that you check for open issues and pull requests to see if someone else is working on something similar.


## About this repository

- Purpose: This repository is dedicated to the development and maintenance of the bsf-admin-ui library, a collection of reusable UI components designed for admin interfaces.
- Technology Stack:
  - [TypeScript:](https://www.typescriptlang.org/) Ensures type safety and improved development experience.
  - [@emotion/css:](https://emotion.sh/docs/introduction) Used for styling components with a powerful and flexible CSS-in-JS solution.
  - Node.js: Backend environment, with the current version set to 18.15.0 for now please check package.json node version.
  - Prettier: Ensures consistent code formatting across the project.

## Structure

This repository is structured as follows:

```
bsf-admin-ui
└── src
    ├── components
    ├── css-variables
    ├── settings
    └── utility
```

| Path                  | Description                              |
| --------------------- | ---------------------------------------- |
| `src/components`      | The React UI components                  |
| `src/settings`        | Components which used in specific plugins|

## Development

### Clone on your local machine

```bash
git clone https://github.com/your-username/bsf-admin-ui.git
```

### Navigate to project directory

```bash
cd bsf-admin-ui
```

### Create a new Branch

```bash
git checkout -b my-new-branch
```

### Install dependencies

```bash
npm install
```

### Link the Library Locally:
Link the library in your local environment. This will allow you to use the library in other projects on your machine.

```bash
npm link
```
### Start Development Server: 
Start the development server to begin developing.
```bash
npm start
```

### Build Package
- **Build the package**: Building the package is required after completing development for raising a PR. This process creates the build files.

```bash
npm run build
```
### Using the Linked Library in Your Project
To use the locally linked library in your project, follow these steps:

- Navigate to Your Project Folder: Go to the root folder of the project where you want to use the bsf-admin-ui library.

- Link the Library: Link the bsf-admin-ui library to your project.

```bash
npm link bsf-admin-ui
```

- Ensure Node Version Consistency: Make sure that the Node.js version in your project matches the version specified in the bsf-admin-ui library.



### Quick Recap

- In the library (bsf-admin-ui) root folder:
```bash
npm link
```

- In your project root folder:

```bash
npm link bsf-admin-ui
```

## Development Workflow

- **Create Components**: You can create new components in either the components directory or the settings directory depending on the type of component.

  - **Library Structure**: The `bsf-admin-ui` library is organized into two primary subfolders:
    - **Settings**: Components related to application settings.
    - **Components**: General reusable UI components.

- **Export Components**: After creating a component, make sure to export it from the index.tsx file in the appropriate directory. This makes the component available for use in other parts of the library and projects.


- **Using Components**: in Your Project: Once you have created and exported your component, you can use it in your project. Example usage:

  If you are adding a component inside the `settings` folder, import it like this:

```javascript
import { MyComponent } from 'bsf-admin-ui/settings';

const App = () => (
  <div>
    <MyComponent />
  </div>
);

```
  If you are adding a component inside the `Components` folder, import it like this:

```javascript
import { MyComponent } from 'bsf-admin-ui/components';

const App = () => (
  <div>
    <MyComponent />
  </div>
);

```

## Creating New Subfolders
 - If you need to create a new subfolder, follow these steps:
    1. **Export from `package.json`**: Add the new subfolder's path to the `exports` field in `package.json`.
    2. **Update Rollup Configuration**: Modify `rollup.config.js` to include the new subfolder in the build process.
    3. **Add Components**: Add your components to the new subfolder and ensure they are correctly exported and documented.
    4. By adhering to this structure and process, you ensure that your components are properly organized, imported, and built within the `bsf-admin-ui` library.

# Raising New Pull Requests (PRs)

## Overview

When contributing to the `bsf-admin-ui` library, it’s important to follow a structured process for raising new pull requests. Whether you are fixing a bug, adding new components, or improving existing components, adhering to the guidelines ensures smooth integration and consistency across the library.

## Types of Contributions

### Fixing Issues

- **Identify the Issue**: Clearly identify the bug or issue you are fixing. Ensure there is an associated issue in the repository's issue tracker.
- **Branch Naming**: Create a branch with a descriptive name, prefixed by `fix/`. Example: `fix/button-styling`.
- **Code Changes**: Make the necessary code changes to fix the issue. Ensure your changes are well-documented and follow the coding standards of the repository.
- **Testing**: Thoroughly test your changes to ensure the issue is resolved and no new issues are introduced.
- **Commit Message**: Use a clear and descriptive commit message. Example: `Fix: Correct button styling on hover`.

### Adding New Components

- **Branch Naming**: Create a branch with a descriptive name, prefixed by `feature/`. Example: `feature/new-dropdown-component`.
- **Component Development**: Develop the new component inside the appropriate folder (`components` or `settings`). Ensure it is well-documented and follows the repository’s coding standards.
- **Export Component**: Ensure the new component is exported from the respective `index.tsx` file.
- **Testing**: Write and run tests for your new component to ensure it works as expected.
- **Commit Message**: Use a clear and descriptive commit message. Example: `Feature: Add new Dropdown component`.

### Improving Existing Components

- **Branch Naming**: Create a branch with a descriptive name, prefixed by `improve/`. Example: `improve/modal-accessibility`.
- **Identify Improvements**: Clearly outline the improvements you are making. These could be performance enhancements, accessibility improvements, code refactoring, etc.
- **Code Changes**: Implement the improvements, ensuring your code follows the repository’s standards.
- **Testing**: Test the improved component to ensure the changes are effective and do not introduce new issues.
- **Commit Message**: Use a clear and descriptive commit message. Example: `Improve: Enhance accessibility of Modal component`.

## Steps to Raise a PR

- Create a Pull Request: Navigate to the original bsf-admin-ui repository and create a new pull request:
- Base Branch: Ensure the base branch is set to master.
- Compare Branch: Select the branch you created with your changes.
- PR Description: Provide a detailed description of the changes you made, why you made them, and any other relevant information. Include references to any related issues or pull requests.
## Note
- If you run npm install in the library or your specific project, you need to link the project again. Follow the linking instructions mentioned above to ensure your project and library are correctly linked.

By following these steps, you ensure that your contributions are effectively reviewed and integrated into the bsf-admin-ui library. Thank you for your contributions!