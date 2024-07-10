# News App

## Descripcion

News App is a Tech Assessment Project to demonstrate knowledge of Next.js. It shows up news from a dummy-news.ts file.

## Getting Started

1. Install the necessary dependencies: Before running the development server, make sure to install all project dependencies. You can do this with one of the following commands:

```bash
npm install
```

2. Run the development server: You can start the development server using one of the following commands:

```bash
npm run dev
```

## Database

This application uses SQLite as its database. Ensure that the SQLite database is properly set up before running the application.

**Note:** Image files must be stored in assets and also in public allowing the db url access the folder based on the url provided.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Code Quality and Best Practices

The platform ensures high code quality and follows best practices.

## Base libraries used

- **Next.js:** As the chosen framework to build with.
- **React:** As the UI library in the background.
- **TypeScript:** Adding strong static types and advanced features to improve large-scale development and code maintainability.

## UX/UI

- **CSS Modules:** The application utilizes global CSS styles and CSS Modules for precise styling on each component that requires it.

## Special Features

- **Nested Routes and layouts:**

Nested routes and Layouts allow you to create a hierarchical structure for your application. You can organize your pages into subdirectories, making it easier to manage complex layouts.

```bash
/app
├── /archive
│   ├── /page.tsx
│   └── layout.tsx
```

- **Dynamic Routes:**

Dynamic routes allow you to handle URLs with varying parameters. You can use square brackets -> [], to define dynamic segments in your route.

```bash
/app
├── /news
│   ├── /[slug]
│   │   ├── page.tsx
│   └── page.tsx
```

- **Parallel Routes:**

Parallel routes enable simultaneous or conditional rendering of multiple pages within the same layout. They’re useful for highly dynamic sections, such as dashboards or social feeds.

```bash
/app
├── /archive
│   ├── /@archive
│   ├── [year]
│   │   └── page.tsx
│   └── page.tsx
│   ├── /@latest
│   │   └── default.tsx
│   └── layout.tsx
```

- **Interceptor routes**

Are used in conjunction with parallel routes to create modals.

They address challenges when building modals, such as sharing content via URLs and preserving context during page reloads.

## Contributions

Contributions are welcome. If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/new-feature).
3. Make your changes and commit them (git commit -am 'Add new feature').
4. Push your branch (git push origin feature/new-feature).
   Open a Pull Request.
