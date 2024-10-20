# Favorite Characters App

A React-based web application that allows users to browse starwars characters, add them to their favorites, and manage the favorites list.
Users can also edit character details such as height and gender. The app is built with modern tools like Zustand for state management and React Query for data fetching.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Available Scripts](#available-scripts)

## Features

- Browse characters and view details like height, gender, homeworld, etc.
- Add characters to the favorites list.
- Edit character height and gender.
- Remove characters from the favorites list.
- Responsive design and accessible UI with ARIA attributes.

## Demo

[Open Starwars App](http://localhost:5173)

[Open StoryBook](http://localhost:5173)

## Getting Started

### Prerequisites

- Node.js (>=14.x)
- npm (>=6.x)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/dev-aku-sapiens/allica-test
   ```

2. Navigate to the project directory:

   ```bash
   cd allica-test
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

# Project Folder Structure

```
├── .gitignore
├── .hintrc
├── .storybook
│   ├── main.ts
│   ├── preview-head.html
│   ├── preview.ts
├── eslint.config.js
├── index.html
├── jest.config.ts
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   ├── icons
│   │   ├── star-wars.svg
│   ├── image
│   │   ├── star-wars.png
├── README.md
├── src
│   ├── App.tsx
│   ├── components
│   │   ├── shared
│   │   │   ├── Button.tsx
│   │   │   ├── ErrorBoundary.tsx
│   │   │   ├── index.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Pagination.tsx
│   │   │   ├── Select.tsx
│   │   │   ├── Skeleton.tsx
│   │   │   ├── Spinner.tsx
│   │   ├── skeleton
│   │   │   ├── CharacterDetailsSkeleton.tsx
│   │   │   ├── index.tsx
│   │   │   ├── SkeletonCard.tsx
│   │   ├── ui
│   │   │   ├── CharacterCard.tsx
│   │   │   ├── EditModal.tsx
│   │   │   ├── index.tsx
│   │   │   ├── List.tsx
│   ├── index.css
│   ├── lib
│   │   ├── constants.ts
│   │   ├── tools.ts
│   ├── main.tsx
│   ├── pages
│   │   ├── CharacterDetails.tsx
│   │   ├── CharacterList.tsx
│   │   ├── FavoritesPage.tsx
│   │   ├── index.tsx
│   ├── services
│   │   ├── api
│   │   │   ├── films.ts
│   │   │   ├── index.ts
│   │   │   ├── people.ts
│   │   │   ├── planets.ts
│   │   │   ├── starships.ts
│   │   ├── index.ts
│   │   ├── types
│   │   │   ├── films.ts
│   │   │   ├── index.ts
│   │   │   ├── people.ts
│   │   │   ├── planets.ts
│   │   │   ├── starships.ts
│   ├── setupTests.ts
│   ├── store
│   │   ├── index.ts
│   │   ├── useFavoritesStore.ts
│   ├── stories
│   │   ├── Configure.mdx
│   │   ├── shared
│   │   │   ├── Button.stories.tsx
│   │   │   ├── Input.stories.tsx
│   │   │   ├── Modal.stories.tsx
│   │   │   ├── Pagination.stories.tsx
│   │   │   ├── Select.stories.tsx
│   │   │   ├── Skeleton.stories.tsx
│   │   │   ├── Spinner.stories.tsx
│   ├── types
│   │   ├── common.ts
│   ├── vite-env.d.ts
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.app.tsbuildinfo
├── tsconfig.json
├── tsconfig.node.json
├── tsconfig.node.tsbuildinfo
├── vite.config.ts
├── __tests__
│   ├── Button.test.tsx
│   ├── Input.test.tsx
│   ├── Modal.test.tsx
│   ├── Pagination.test.tsx
│   ├── Select.test.tsx
│   ├── Skeleton.test.tsx
│   ├── Spinner.test.tsx
```

## Technologies Used

- React
- Axios
- TypeScript
- TailwindCSS
- MUI Icons
- Zustand (State Management)
- Axios (Data Fetching)

## Available Scripts

**`npm run dev`**:  
 Start the development server using **Vite**. This allows you to develop the application locally with fast build times, hot module replacement (HMR), and other Vite-specific development features.

**`npm run lint`**:  
 Run **ESLint** to check for and enforce consistent code quality and style across the project. It identifies code that doesn't follow your project's coding guidelines.

**`npm run build`**:  
 Compile **TypeScript** code and build the project for production using **Vite**. This generates an optimized, minified production-ready bundle of your application.

**`npm run preview`**:  
 Preview the production build of your application locally. This runs a **Vite Preview** server so you can test the final build before deployment.

**`npm run sb`**:  
 Start the **Storybook** development server. Storybook is a tool for developing and testing UI components in isolation. It runs on port `6006` by default.

**`npm run build:sb`**:  
 Build a static version of **Storybook**. This prepares the UI component library for deployment or documentation by generating a static site that you can host or share with your team.

**`npm run test`**:  
 Run the test suite using **Jest**. This executes all test files in the project and provides test results in the terminal. Use this script to ensure your code passes unit tests.

**`npm run test:coverage`**:  
 Run **Jest** tests and generate a code coverage report. This report shows how much of your code is covered by tests, helping you identify untested areas.

**`npm run build:all`**:  
 Perform a full project build. This script compiles the **TypeScript** code, builds the application using **Vite**, and generates the static version of **Storybook**. Use this script when preparing the entire project for production or deployment.
