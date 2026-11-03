# Stock Starter: React Fundamentals

This is a small Product Inventory Management System for students beginning React. It is a front-end practice project, so products reset when the browser refreshes. Later, PHP, Laravel, and MySQL can replace the starter product list with saved database data.

## Student Goal

Build and understand a React app with reusable components, props, page routes, form events, `useState`, and `useEffect`.

## Create The Project From The Command Line

Open a terminal in the folder where you keep class projects. Run these commands exactly. The first command creates the Vite project folder and its starter files; no files need to be created by hand.

```bash
npm create vite@latest inventory-react-basics -- --template react
cd inventory-react-basics
npm install
npm install react-router
npm run dev
```

Vite prints a local address such as `http://localhost:5173/`. Open that address in a browser.

For this completed practice version, the source files are already in this folder. To check it after opening the folder in a terminal:

```bash
npm install
npm run dev
```

## Required Practice

1. Open `src/data/products.js`. Change `Notebook` to a product you know. Save and see the browser update.
2. Open `src/components/ProductCard.jsx`. Add a line that shows the product ID. Expected result: every card shows a different ID.
3. Open `src/pages/HomePage.jsx`. Change the heading text. Expected result: only the home page heading changes.
4. Open the **Add product** route in the browser. Add a product with quantity `5`. Then open **Products**. Expected result: the new card appears.
5. Add a product with quantity `0`. Expected result: its status says `Out of stock` in red.
6. Type a missing URL, for example `/hello`. Expected result: React Router shows the not-found page.
7. Select the arrow at the bottom of the sidebar. Expected result: the sidebar changes between wide and narrow without leaving the current route.
8. Select **Team** in the sidebar. Expected result: Team 1 and Team 2 open below it. Select Team again to hide them.
9. Select **Team 1** and **Team 2**. Expected result: each submenu item opens `/team/team-1` or `/team/team-2` as a child of the `/team` route.

## Independent Practice

Add a `price` field to every product. Pass it through the form and show it in `ProductCard`.

## Optional Challenge

Create a new `LowStockPage` route that only shows products with fewer than 5 items.

## Commands To Review

```bash
# Start the development server with automatic browser updates.
npm run dev

# Check source files for simple lint problems.
npm run lint

# Create a production version in the dist folder.
npm run build

# Serve the production version locally after building.
npm run preview
```

## Submission Checklist

- [ ] I can start the app with `npm run dev`.
- [ ] I changed a starter product and saw the result.
- [ ] I added a product using the form.
- [ ] I can explain one component, one prop, and one state value.
- [ ] I completed the independent practice or wrote what stopped me.

## Reflection

1. Which component owns the `products` state?
2. Why does `ProductCard` need a `product` prop?
3. What happens when `setProducts` runs?
4. Why is `key={product.id}` used when React repeats cards?

Read [CONCEPT-MAP.md](./CONCEPT-MAP.md) before changing the code. Use [COMMANDS.md](./COMMANDS.md) as the terminal command reference. Use [SECTION-GUIDE.md](./SECTION-GUIDE.md) when you want to understand each source file in order.
