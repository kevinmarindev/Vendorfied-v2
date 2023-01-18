# Vendorfied

## Folder Structure

```
project
│
├─── src
│   ├─── api
│   ├─── components
│   |       ui
│   |       layouts
│   |       views
│   ├─── models
│   ├─── pages
│   └─── utils
│   .env.example
│   .gitignore
│   .prettier
│   index.html
│   manifest.json
│   package.json
│   postcss.config.js
│   staticwebapp.config.json
│   tailwind.config.js
│   tsconfig.json
│   vite.config.ts
```

### Folder Naming Convention

---

- All folders should be camel case UNLESS the Folder is the name of a React component. Though the children should be named index.tsx - this is so we can introduce individual testing files later if needed.

```
├─── components
|   ├─── ui
        ├─── LoadingScreen
        |       index.tsx
```

### API

---

We will utilizes [TanStack/React-Query](https://react-query-v3.tanstack.com/) - This allows us to not need general state management.

### Components

---

### ui

These should be stateless ui elements that are used through out the application.

### layout

These should be the overarching component wrappers around the application, things like nav bars and search bars should be managed here.

### views

These are stateful ui elements, typically expecting a greater context - such as an id on a route.

An example:
The SearchBar component will use query parameters in the url.

## Models

---

This is where we should keep types, interfaces, and zod and yup schemas. Try to keep the naming convetion of every "Object" or "domain" gets a single folder.

An example:

## Pages

Try to the naming convention of `/pagename/subcomponent/....`.

An example:

```
pages
    Home            <- `/`
    Clients         <- `/Clients`
        index.tsx
        Client      <-  `/Clients/{id}` This route expects a id
            index.tsx
    Login           <- `/Login`
```

## utils

This is where helper functions should go. Try to keep the naming convetion of every "Object" or "domain" gets a single folder.

## App.tsx

This is where all your providers and services should be initialized.

## .env
