# Source File Guide

This guide follows the source order. Run each command from the `inventory-react-basics` folder. The commands only read files; they do not change your project.

## 1. The HTML Starting Point

```bash
sed -n '1,160p' index.html
```

`index.html` is the one HTML page loaded by the browser. The empty `<div id="root">` is the place where React puts the application. The script loads `src/main.jsx`.

Visible result: the browser shows the React app instead of an empty page.

Try it: change the `<title>` text, refresh the browser, and look at the browser tab.

## 2. The React Entry Point

```bash
sed -n '1,180p' src/main.jsx
```

`main.jsx` starts React with `createRoot`. `BrowserRouter` gives the app access to URL routes. `StrictMode` helps find common development mistakes.

```jsx
<BrowserRouter>
  <App />
</BrowserRouter>
```

Visible result: React displays `App` inside the `root` element.

Try it: find `BrowserRouter` in the file with `rg -n "BrowserRouter" src/main.jsx`.

## 3. The Main Parent Component

```bash
sed -n '1,260p' src/App.jsx
```

`App` is the main parent component. It owns the product list and sends product data down to page components as props. It also owns the wide or collapsed sidebar state.

```jsx
const [products, setProducts] = useState(starterProducts)
```

The `Routes` block connects URLs to components. The `/team` route is a parent route with `team-1` and `team-2` child routes.

Visible result: moving between routes keeps the same product state until the browser refreshes.

Try it: run `rg -n "useState|useEffect|Route|setProducts" src/App.jsx` and match each result to its job.

## 4. The Sidebar And Submenu

```bash
sed -n '1,240p' src/components/Navigation.jsx
```

`Navigation` is a component used by `App`. It uses `NavLink` for links and `useLocation` to check the current URL.

```jsx
const isTeamActive = location.pathname.startsWith('/team')
```

This makes the Team parent active on `/team`, `/team/team-1`, and `/team/team-2`. The `isTeamOpen` state controls whether Team 1 and Team 2 are visible.

Visible result: Team stays blue when either child page is open, and its arrow button opens or hides the submenu.

Try it: change the initial value from `true` to `false`. The submenu will begin closed.

## 5. The Data File

```bash
sed -n '1,120p' src/data/products.js
```

This file exports the starting array of product objects. An object stores related values such as `name`, `category`, and `quantity`.

Visible result: these three products appear on the Products page.

Try it: add a fourth object with a different `id` and product name.

## 6. A Component With A Prop

```bash
sed -n '1,180p' src/components/ProductCard.jsx
```

`ProductCard` receives one `product` prop. It does not own the complete product list. Its one job is to display one product.

```jsx
function ProductCard({ product }) {
  return <h3>{product.name}</h3>
}
```

Visible result: the Products page displays one card for each product.

Try it: add `<p>Category: {product.category}</p>` below the product heading.

## 7. A Form With State

```bash
sed -n '1,260p' src/components/ProductForm.jsx
```

`ProductForm` uses `useState` for the three input values and the feedback message. Each input is controlled because its `value` comes from state and its `onChange` updates state.

`onAddProduct` is a callback prop. The form calls it after validation so `App` can add the new product to the main list.

Visible result: submitting the form adds a card on the Products page without a full browser refresh.

Try it: submit the form with one empty field and read the message below the button.

## 8. The Home Page

```bash
sed -n '1,180p' src/pages/HomePage.jsx
```

`HomePage` receives `products` as a prop. It uses `filter` to count products with quantity zero and `Link` to move to the form route.

Visible result: the overview numbers match the current product list.

Try it: change the overview heading and see the result only on the Home route.

## 9. The Products Page

```bash
sed -n '1,180p' src/pages/ProductsPage.jsx
```

`ProductsPage` repeats `ProductCard` with `map`. The `key` value gives each repeated component a stable identity.

Visible result: every product is shown as a separate card, or an empty message appears when the list is empty.

Try it: change the card text in `ProductCard.jsx` and see every card change.

## 10. The Add Product Page

```bash
sed -n '1,160p' src/pages/AddProductPage.jsx
```

This page gives the `onAddProduct` callback prop to `ProductForm`. It keeps the page component small and lets the form focus on form work.

Visible result: the Add product route shows the labeled form.

Try it: change the page description without changing the form.

## 11. Nested Team Pages

```bash
sed -n '1,120p' src/pages/TeamLayout.jsx
sed -n '1,160p' src/pages/TeamOnePage.jsx
sed -n '1,160p' src/pages/TeamTwoPage.jsx
```

`TeamLayout` renders `<Outlet />`. React Router replaces that outlet with the selected child page. The parent URL is `/team`; the relative child paths are `team-1` and `team-2`.

Visible result: `/team/team-1` and `/team/team-2` show different simple pages, while Team remains active in the sidebar.

Try it: change the welcome message in `TeamOnePage.jsx` only.

## 12. The Not-Found Page

```bash
sed -n '1,140p' src/pages/NotFoundPage.jsx
```

The final `path="*"` route in `App.jsx` displays this page when no route matches the URL.

Visible result: `/does-not-exist` shows the not-found message.

Try it: type a missing URL and use the Go home link.

## 13. The Shared Styles

```bash
sed -n '1,260p' src/index.css
```

`index.css` styles the shell, sidebar, active links, submenu, page surface, cards, form, and mobile layout. The `@media` section changes the layout for smaller screens.

Visible result: the app resembles the reference sidebar layout and remains readable on a narrow screen.

Try it: change `.sidebar-group-button.active` from blue to another color, then refresh.

## Full Source Search Commands

```bash
# Find every React component function.
rg -n "function .*\(" src

# Find every route.
rg -n "Route path|Route index" src

# Find every state hook.
rg -n "useState|useEffect" src

# Find every component prop passed with JSX.
rg -n "products=|onAddProduct=|product=" src
```

## Final Checks

```bash
npm run lint
npm run build
```

Expected result: both commands finish without source errors. Vite may print a non-blocking module directive warning from dependency files; it does not come from the student source code.
