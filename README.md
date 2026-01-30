# Trip Card Explorer - Candidate Project React

## Clone the repository

```bash
git clone git@github.com:KrastevIT/trip-card-explorer.git
```

## Install dependencies

```bash
npm install
```

## Start the development server

```bash
npm run dev
```

## Design decisions

### Component structure
The application is split into small, focused components such as TripCards, TripCard, and TripDescriptionModal to keep the codebase readable and easy to maintain.

### Local data
Data is fetched from a local data.json file located in the public folder to simulate an API request.

### React Hooks
useState and useEffect are used for state management and data fetching.

### UI/UX focus
A clean card-based layout with a modal for detailed information was chosen to keep the main view uncluttered and user-friendly.

### Styles
The BEM methodology is used for styling sections and elements. Each block has its own CSS file, organized within the assets folder, to improve structure and maintainability.

### Responsive layout
Media queries are applied at key breakpoints, 767px and 480px, to ensure a good experience across devices.

## Trade-offs

### No global state management
Context or Redux was intentionally avoided since the app is small and local state is sufficient.

### No external UI libraries
Styling is done with plain CSS to keep dependencies minimal and focus on core React fundamentals.

### Mock API instead of real backend
Using a local JSON file simplifies development but does not cover real network scenarios like pagination or authentication.
