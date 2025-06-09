# Onboarding Digital

A simple onboarding/tutorial React application built with TypeScript and Vite.

## Features

- Multi-step onboarding flow using cards
- Step indicator navigation
- State management with React hooks
- Type-safe components with TypeScript
- Fast development with Vite

## Project Structure

```
src/
  App.tsx            # Main application component
  App.css            # Global styles
  components/
    Card.tsx         # Card component for each onboarding step
    Indicator.tsx    # Step indicator component
  data/
    data.tsx         # Tutorial data for the onboarding steps
  assets/            # SVG and image assets
  main.tsx           # Entry point
  index.css          # Base styles
public/
  vite.svg           # Vite logo
```

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/onboarding-digital.git
   cd onboarding-digital
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the App

Start the development server:
```sh
npm run dev
# or
yarn dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```sh
npm run build
# or
yarn build
```
