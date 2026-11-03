# Command-Line Setup And Checks

Run these commands in a terminal. `npm` is Node Package Manager. It downloads JavaScript packages and runs project scripts.

## Check The Tools

```bash
node --version
npm --version
```

Expected result: both commands print version numbers. Install a current Node.js LTS release if either command is not found.

## Create A New Vite React Project

```bash
npm create vite@latest inventory-react-basics -- --template react
```

What it does:

- `npm create vite@latest` downloads and runs the current Vite project creator.
- `inventory-react-basics` is the new folder name.
- `--template react` selects the React starter.

Expected result: a new `inventory-react-basics` folder appears.

## Enter The Project And Install Packages

```bash
cd inventory-react-basics
npm install
npm install react-router
```

What it does:

- `cd` moves the terminal into the project folder.
- `npm install` downloads the packages listed in `package.json`.
- `npm install react-router` adds the routing package used for Home, Products, and Add product pages.

Expected result: a `node_modules` folder and `package-lock.json` file appear.

## Run The App

```bash
npm run dev
```

Expected result: Vite prints a `Local` web address. Keep this terminal open while working. Press `Ctrl + C` to stop it.

## Verify Before Submitting

```bash
npm run lint
npm run build
```

Expected result:

- `npm run lint` finishes without errors.
- `npm run build` creates a `dist` folder without errors.

## Useful Recovery Commands

Only run these when a teacher asks you to reinstall packages:

```bash
rm -rf node_modules package-lock.json
npm install
```

Expected result: npm downloads a fresh copy of the packages. Do not delete the `src` folder because it contains your work.
