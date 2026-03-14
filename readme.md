# Automatic Deployment to GitHub Pages

This project is configured for fully automated deployment to GitHub Pages using GitHub Actions.

## Setup and Changes

The following changes were implemented to enable automatic deployment:

1.  **Dependency**: Added `gh-pages` to manage the deployment to the `gh-pages` branch.
2.  **Scripts**: Updated `package.json` with a `deploy` script (`gh-pages -d dist`).
3.  **Automation**: Created a GitHub Actions workflow in `.github/workflows/cd.yml`.
    -   This workflow triggers on every push to the `master` branch.
    -   It automatically installs dependencies, builds the project, and deploys the `dist` folder.
4.  **Security**: Configured the workflow to use an SSH private key for secure deployment to the repository.

## How it works

Once you push your code to the `master` branch, GitHub Actions will:
-   Start a virtual environment.
-   Clone the repository.
-   Run `npm ci` and `npm run build`.
-   Run `npm run deploy` to update the living site on GitHub Pages.

You can monitor the progress in the **Actions** tab of this repository.
