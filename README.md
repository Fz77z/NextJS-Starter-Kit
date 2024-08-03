# Next.js Starter Kit

Welcome to the Next.js Starter Kit! This repository serves as a boilerplate for building a web applications using Next.js, NextAuth, Drizzle ORM, Turso, shadcn-ui and Tailwind, and more. Below you will find instructions for setting up the project, running various commands, and contributing to the repository.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/en/) installed on your machine. We recommend using the latest LTS version. Additionally, you should have [pnpm](https://pnpm.io/) installed globally:

```bash
npm install -g pnpm
```

### Installation

First, install the project dependencies:

```bash
pnpm install
```

### Running the Development Server

To start the development server, run the following command:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

### Build

Builds the application for production. The output will be in the `.next` folder. Run this command to prepare your app for deployment:

```bash
pnpm build
```

### Development

Starts the development server with hot-reloading enabled. Use this during development to see your changes in real-time:

```bash
pnpm dev
```

### Database

This project uses Drizzle ORM for database migrations and management. Here are the relevant database commands:

- **Generate Migrations**: Automatically generates migration files based on your schema. Use this command after making changes to your schema: - these can be found db/migrations once generated

  ```bash
  pnpm db:generate
  ```

- **Push Migrations**: Applies the generated migrations to your database. Use this command to update your database schema:

  ```bash
  pnpm db:push
  ```

- **View Database**: Opens the Drizzle Studio for visualizing and interacting with your database schema:

  ```bash
  pnpm db:view
  ```

## Contributing

Pull requests are welcome! If you have any ideas, improvements, or bug fixes, please feel free to contribute. Here's how you can get started:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/my-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/my-feature`).
6. Open a pull request.

## License

This project is licensed under the MIT License.
