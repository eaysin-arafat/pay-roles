# Add Rule Component Project

## Overview

This project implements an "Add Rule" feature in a web application that allows users to define and save rules with specific conditions, payment methods, and statuses. The application uses React.js for building the frontend, TypeScript for type safety, and Shopify Polaris for UI components.

## Features

- **Dynamic Rule Creation**: Allows users to add multiple conditions, define rule settings, and set payment methods.
- **Modal Display**: After saving a rule, its data is displayed in a modal.
- **State Management**: Custom hooks are used to manage rule states, conditions, and payment methods.
- **Action Buttons**: Users can save or discard their changes using action buttons.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static typing.
- **Shopify Polaris**: A component library for building consistent and accessible UIs.
- **Vite**: A fast, modern build tool and development server.
- **Yarn**: A package manager to manage project dependencies.
- **Module Css**:

## Live Demo

You can view a live demo of this project [here](https://pay-roles-eaysin-arafats-projects.vercel.app/).

## Project Structure

- `.gitignore`: Specifies files and folders to be ignored by Git version control.
- `README.md`: The documentation file for the project, providing information about the app, its purpose, and how to use it.
- `dist/`: Contains the output files after building the app, ready for deployment.
  - `assets/`: Stores compiled static assets like JS and CSS files.
    - `index-CpNmrz3R.js`: Compiled JavaScript file.
    - `index-_PynFBA1.css`: Compiled CSS file.
  - `index.html`: The main HTML file that gets served for the app.
  - `vite.svg`: Vite logo image used for branding.
- `eslint.config.js`: Configuration file for ESLint to enforce coding standards and best practices.
- `index.html`: The entry point HTML file for the app.
- `package.json`: Contains metadata about the project, dependencies, scripts, and other configurations.
- `public/`: Static assets like images, fonts, etc.
  - `vite.svg`: Vite logo image for branding purposes.
- `src/`: The source code of the application.
  - `App.tsx`: The root React component that serves as the entry point for the app.
  - `assets/`: Stores images and other static assets used within the app.
    - `react.svg`: An image related to React.
  - `components/`: Contains reusable UI components like header, popover, searchable selects, etc.
    - `header.tsx`: The header component for the app.
    - `popover-with-searchable-listbox.tsx`: A component for a searchable listbox inside a popover.
    - `providers/`: Context providers for managing global state.
      - `PolarisProvider.tsx`: A provider component for integrating Shopify Polaris UI.
    - `searchable-select.tsx`: A component for searchable select dropdowns.
  - `constant/`: Contains constants and configuration files used throughout the app.
    - `data.tsx`: Contains static data used within the app.
  - `hooks/`: Custom React hooks for managing logic and state.
  - `index.css`: Global CSS file.
  - `layout/`: Layout-related components such as alerts, sidebar, and root layout.
    - `components/`: Reusable layout components.
      - `alert-card.tsx`: A component to display alert messages.
      - `info-card.tsx`: A component to display informational messages.
    - `root-layout.tsx`: The root layout of the app that defines the structure (e.g., header, sidebar).
    - `sidebar.tsx`: A sidebar component for navigating through the app sections.
  - `main.tsx`: The main entry point that renders the app to the DOM.
  - `page/`: Pages and components related to different sections of the app.
    - `home-page/`: The home page of the app.
      - `components/`: Home page-specific components such as action buttons, conditions display, and rule settings.
        - `action-buttons.tsx`: The component that renders action buttons.
        - `condition-display.tsx`: Displays the selected conditions for the rule.
        - `conditions/`: Various condition components like `condition01.tsx`, `condition02.tsx`, etc.
        - `contact.tsx`: The contact information component for the rule.
        - `payment-methods.tsx`: Payment methods component for the rule.
        - `rule-settings.tsx`: Rule settings component for defining conditions, match logic, etc.
        - `status.tsx`: Status display component.
      - `hooks/`: Custom hooks specific to managing rule data on the home page.
        - `useAddRole.tsx`: Manages the rule's state, conditions, and payment methods.
      - `index.tsx`: The entry point for the home page, rendering all components necessary for rule creation.
  - `types/`: TypeScript type definitions used throughout the app.
    - `index.ts`: Main type definitions file for the app.
  - `utils/`: Utility functions shared across the app.
  - `vite-env.d.ts`: TypeScript declaration file for Vite.
- `tsconfig.app.json`: TypeScript configuration specific to the app.
- `tsconfig.json`: The main TypeScript configuration for the project.
- `tsconfig.node.json`: TypeScript configuration for the Node environment.
- `vite.config.ts`: Configuration file for Vite, the build tool and development server.
- `yarn.lock`: Dependency lock file for Yarn package manager to ensure consistent installations.

## Setup and Installation

1.  Clone this repository:
    ```bash
    git clone https://github.com/your-username/repository-name.git
    ```
2.  Navigate to the project folder:

    ```
    cd repository-name
    ```

3.  Install dependencies using Yarn:

    ```
    yarn install
    ```

4.  Start the development server:

        ```
        yarn dev
        ```

    Open your browser and go to `http://localhost:3000` to see the app in action.

## Usage

- **Add a Rule:** Use the app's interface to add conditions, define settings, select payment methods, and assign a status to a rule.
- **Save the Rule:** Click the "Save" button to display the rule data in a modal.
- **Discard Changes:** Click the "Discard" button to reset the rule data.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

Thanks to Shopify Polaris for the UI component library.
Thanks to Vite for providing an excellent development environment.

`This README file provides all the necessary details for your project, including the project overview, structure, setup, and usage instructions.`
