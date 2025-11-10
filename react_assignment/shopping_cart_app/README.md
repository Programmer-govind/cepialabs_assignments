# Shopping Cart App

A React-based shopping cart application demonstrating state management and component communication.

## 🎯 Assignment Objective
Practice state management and component communication in React.

## ✨ Features

### Core Features
- **Product Listing**: Display products with names and prices
- **Add to Cart**: Add products to shopping cart
- **Quantity Management**: Increase/decrease item quantities with +/- buttons
- **Remove Items**: Remove individual items from cart
- **Cart Summary**: Real-time total price and item count
- **Persistent Storage**: Cart data saved to localStorage

### Bonus Features
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Professional UI**: Clean, modern interface with hover effects
- **Error Prevention**: Disabled states and proper validation
- **Touch-Friendly**: Optimized button sizes for mobile interaction

## 🏗️ Component Architecture

```
App (Main Container)
├── ProductList (Product Display)
│   └── Product Cards with "Add to Cart" buttons
├── CartItem (Individual Cart Items)
│   ├── Product Info
│   ├── Quantity Controls (+/- buttons)
│   ├── Item Total
│   └── Remove Button
└── CartSummary (Cart Totals)
    ├── Total Items Count
    └── Total Price
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Navigate to the project directory:
   ```bash
   cd react_assignment/shopping_cart_app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🛠️ Technology Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: CSS with Flexbox/Grid
- **State Management**: React useState
- **Persistence**: localStorage
- **Linting**: ESLint

## 📱 Responsive Design

The app is fully responsive with breakpoints for:
- **Desktop**: Full layout with side-by-side sections
- **Tablet**: Adjusted spacing and smaller buttons
- **Mobile**: Stacked layout with touch-optimized controls

## 🎨 Design Features

- **Modern UI**: Clean card-based design
- **Color Scheme**: Professional blue/green/red color palette
- **Typography**: Readable fonts with proper hierarchy
- **Animations**: Smooth hover effects and transitions
- **Accessibility**: Proper contrast and button sizing

## 💾 Data Persistence

Cart data is automatically saved to localStorage and restored when the app loads, providing a seamless user experience across browser sessions.

## 🔧 Key Implementation Details

### State Management
- Uses React's `useState` for cart state
- Implements proper immutable state updates
- Handles complex state operations (add, remove, update quantities)

### Component Communication
- Props down: Data flows from parent to child components
- Callbacks up: Event handlers passed to child components
- Lifting state up: Cart state managed in the main App component

### Performance Optimizations
- Efficient re-rendering with proper key props
- Optimized CSS with specific selectors
- Minimal DOM manipulation

## 🧪 Sample Data

The app includes sample products:
- Laptop ($999)
- Phone ($599)
- Headphones ($199)

## 🚀 Deployment Ready

The app is configured for easy deployment to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Build the app with `npm run build` and deploy the `dist/` folder.

---

This project demonstrates practical React skills including state management, component architecture, responsive design, and modern development practices.