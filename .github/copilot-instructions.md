# AI Coding Agent Instructions for web_project_around_auth

## Project Overview

React + Vite application for a social network ("Around") with authentication. The app uses JWT-based auth with protected routes and integrates with a TripleTen backend API. Spanish language UI.

## Architecture & Data Flow

### Authentication Flow

- **Entry point**: `src/components/App.jsx` manages auth state (`isLoggedIn`, `email`)
- **Auth utilities**: `src/utils/auth.js` handles signup/signin/token validation against `https://se-register-api.en.tripleten-services.com/v1`
- **Token management**: JWT stored in `localStorage` as `"jwt"` key, verified on app load via `auth.checkToken()`
- **Route protection**: `ProtectedRoute` component wraps authenticated pages; unauthorized users redirect to `/signin`

### API Integration Pattern

- **API class**: `src/utils/api.js` - singleton managing all backend calls
- **Token injection**: Call `api.setToken(token)` after login to add `Authorization: Bearer {token}` header
- **Key methods**: `getUserInfo()`, `getInitialCards()`, `editProfile()`, `editAvatar()`, `addCard()`, `deleteCard()`, `likeCard()`
- **Base URL**: Configured in api.js constructor; passed as dependency injection pattern

### State Management

- **App.jsx holds**: Login state, user data, cards list, popup open/close flags
- **Context**: `CurrentUserContext` provides `currentUser` object to child components (avatar, name, about)
- **Prop drilling**: Popup handlers and data passed down through component tree to `Main` → `Card`

## Key Components & Conventions

### Component Structure

- **Form components**: `EditProfile/`, `EditAvatar/`, `NewCard/` - accept `onClose`, `onSubmit` callbacks
- **Popup components**: `Popup.jsx` (modal wrapper), `ImagePopUp.jsx` (image viewer)
- **Card component**: `src/components/Main/components/Card/Card.jsx` - renders individual card with like/delete buttons
- **Email-gated pages**: `Login.jsx`, `Register.jsx` - before auth is checked

### Styling Pattern

- BEM naming convention across all CSS files in `blocks/` directory
- Classes like `profile__name`, `cards__list`, `popup__overlay`
- Responsive design with flexbox/grid

## Development Workflow

### Commands

- `npm run dev` - Start Vite dev server on port 3000 with hot reload
- `npm run build` - Production build to `dist/`
- `npm run lint` - Run ESLint (configured in `eslint.config.js`)
- `npm run preview` - Preview production build locally

### Important Patterns to Follow

1. **Always call `api.setToken()` after successful auth** - required for subsequent API calls
2. **Use `useContext(CurrentUserContext)` to access current user** - avoid prop drilling for user data
3. **Close popups with callback pattern** - pass `onClose` to form components, they call it on success/cancel
4. **Conditional renders for protected content** - wrap with `isLoggedIn` checks or use `ProtectedRoute`

## Cross-Component Communication

- Main app event handlers (like `handleLogin`) pass down callbacks to `Login`/`Register`
- Form popups emit results via callbacks: `onEditProfile`, `onAddPlace`, `onEditAvatar`
- Card interactions (`onCardLike`, `onCardDelete`) propagate via callbacks to App state

## Common Workflows

- **Adding new form**: Create in `form/` subdirectory, receive `onSubmit` + `onClose`, call `api.*()` method, trigger callback on success
- **Adding new card action**: Add method to API class, pass handler to Card component, update cards state in App
- **Debugging auth**: Check localStorage `jwt` token, verify `api.setToken()` was called, confirm API headers include Authorization
