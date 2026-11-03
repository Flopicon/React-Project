# How The React Concepts Connect

## One App, Many Small Parts

React builds a page from **components**. A component is a JavaScript function that returns JSX. JSX looks similar to HTML, but it lives inside JavaScript.

```text
main.jsx
  BrowserRouter
    App.jsx
      Navigation <- isCollapsed and onToggle props
      Routes
        HomePage <- products prop
        ProductsPage <- products prop
          ProductCard <- one product prop
        AddProductPage <- onAddProduct prop
          ProductForm <- onAddProduct prop
```

## 1. Entry Point: `main.jsx`

`main.jsx` finds `<div id="root">` in `index.html` and tells React to show `<App />` there.

```jsx
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
```

`BrowserRouter` watches the browser URL. It allows React to show a different page without loading a new HTML page.

Try it: change `/products` in the browser address bar. The Products page should appear.

## 2. Component: `ProductCard.jsx`

`ProductCard` is a reusable piece of interface. It has one job: show one product.

```jsx
function ProductCard({ product }) {
  return <h3>{product.name}</h3>
}
```

The `{product.name}` part places a JavaScript value into JSX.

Visible result: a product card shows its own product name.

Try it: add `<p>ID: {product.id}</p>` under the heading.

## 3. Prop: Data From Parent To Child

A **prop** is data a parent component gives to a child component. `ProductsPage` is the parent here. It gives one `product` object to each `ProductCard`.

```jsx
{products.map((product) => <ProductCard key={product.id} product={product} />)}
```

`key` helps React identify each repeated card. A prop is read-only: a child should not directly change it.

Visible result: one component creates different cards because each card receives different data.

## 4. State: Data That Can Change

**State** is React's memory for a component. `App` uses `useState` to remember the current products.

```jsx
const [products, setProducts] = useState(starterProducts)
```

- `products` is the current list.
- `setProducts` replaces it with a new list.
- `starterProducts` is the first list shown when the app opens.

Visible result: after the form saves a product, the number on the Home page and the cards on the Products page update.

The sidebar uses one more small state value:

```jsx
const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
```

`App` sends the current value and a toggle function to `Navigation`. When the student selects the arrow button, the sidebar changes between wide and narrow. This is another example of a parent owning state and a child requesting a change through a callback prop.

`Navigation.jsx` also owns `isTeamOpen`, because only the Team submenu needs it. Select **Team** to show Team 1 and Team 2, then select it again to hide them. This is a simple boolean `useState` example inside the component that uses the value.

Team 1 and Team 2 are child routes. The `/team` route renders `TeamLayout`, and its `<Outlet />` is replaced by the selected `team-1` or `team-2` page.

`Navigation.jsx` uses `useLocation()` to check the current URL. When the URL starts with `/team`, the Team parent receives the `active` class, so Team stays highlighted while Team 1 or Team 2 is open.

```jsx
<Route path="/team" element={<TeamLayout />}>
  <Route path="team-1" element={<TeamOnePage />} />
  <Route path="team-2" element={<TeamTwoPage />} />
</Route>
```

## 5. Event And Callback Prop

An **event** is something the user does, such as submitting a form. `ProductForm` runs `handleSubmit` for the form `onSubmit` event.

```jsx
function handleSubmit(event) {
  event.preventDefault()
  onAddProduct(newProduct)
}
```

`onAddProduct` is a callback prop: the child calls a function that its parent gave it. The function travels upward through `AddProductPage` to `App`, where `setProducts` changes the state.

```text
Student submits form
  -> ProductForm calls onAddProduct(newProduct)
  -> App runs setProducts([...products, newProduct])
  -> React displays the new data on all routes
```

`event.preventDefault()` stops the browser's normal form refresh so React can handle the update.

## 6. Basic Hook: `useEffect`

A **hook** is a React function that adds a feature to a function component. `useState` adds state. `useEffect` runs work after React updates the screen.

```jsx
useEffect(() => {
  document.title = `${products.length} products | Stock Starter`
}, [products.length])
```

The dependency list `[products.length]` means the effect runs again when the number of products changes.

Visible result: add a product and look at the browser tab title.

## 7. Router: Page Components For URLs

`App.jsx` matches a URL path to a page component.

```jsx
<Routes>
  <Route path="/" element={<HomePage products={products} />} />
  <Route path="/products" element={<ProductsPage products={products} />} />
  <Route path="/add-product" element={<AddProductPage onAddProduct={addProduct} />} />
</Routes>
```

`Navigation.jsx` uses `NavLink` instead of a normal `<a>` link. It changes the URL while keeping React in control of the page.

## Later: Full-Stack Connection

Today, `starterProducts` is temporary front-end data. In later lessons, the path becomes:

```text
React form -> Laravel API route -> Laravel controller -> MySQL products table
MySQL products table -> Laravel API JSON response -> React state -> ProductCard
```

The UI components can stay almost the same. The future change is where the product data comes from and where it is saved.
