# CepiaLabs Assignments

This repository contains various programming assignments and projects completed as part of CepiaLabs training.

## 📁 Project Structure

```
cepialabs_assignments/
├── ES6 JS/                          # JavaScript ES6 practice files
├── products_explorer_app/           # Product explorer application
├── to_do_app/                      # To-do list application
└── react_assignment/               # React.js assignments
    ├── mini_greeting_app/          # Assignment 2: Mini Greeting App
    └── shopping_cart_app/          # Assignment 1: Shopping Cart App
```

## 🚀 React Assignments

### Assignment 1: Shopping Cart App
**Objective:** Practice state management and component communication

**Features:**
- ✅ Product listing with prices
- ✅ Add to cart functionality
- ✅ Quantity controls (+ and - buttons)
- ✅ Remove from cart functionality
- ✅ Cart total and item count display
- ✅ LocalStorage persistence
- ✅ Responsive design

**Components:**
- `ProductList` - displays available products
- `CartItem` - individual cart item with controls
- `CartSummary` - shows total price and item count

**Technologies:** React, Vite, CSS Grid/Flexbox

#### Running the Shopping Cart App:
```bash
cd react_assignment/shopping_cart_app
npm install
npm run dev
```

### Assignment 2: Mini Greeting App
**Objective:** Master form handling, validation, and conditional rendering

**Features:**
- ✅ Registration form with name, email, password, confirm password
- ✅ Real-time validation with specific error messages
- ✅ Password strength indicator
- ✅ Form submission with success message
- ✅ Terms and conditions checkbox
- ✅ Field hints and positive feedback
- ✅ Responsive design

**Components:**
- `GreetingForm` - main form with validation logic
- `GreetingMessage` - success message display
- `ErrorDisplay` - validation error messages

**Technologies:** React, Vite, CSS Modules

#### Running the Mini Greeting App:
```bash
cd react_assignment/mini_greeting_app
npm install
npm run dev
```

## 🛠️ Development Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Programmer-govind/cepialabs_assignments.git
   cd cepialabs_assignments
   ```

2. Navigate to the specific project directory and install dependencies:
   ```bash
   cd react_assignment/[project-name]
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## 📦 Building for Production

Each React app can be built for production:

```bash
cd react_assignment/[project-name]
npm run build
```

The built files will be in the `dist/` directory.

## 📝 Key Learning Outcomes

### React Fundamentals
- ✅ Component composition and reusability
- ✅ Props and state management
- ✅ Event handling and form management
- ✅ Conditional rendering
- ✅ Lifting state up

### Advanced Concepts
- ✅ Real-time form validation
- ✅ LocalStorage integration
- ✅ Responsive design with CSS Grid/Flexbox
- ✅ Component communication patterns
- ✅ State-driven UI updates

### Best Practices
- ✅ Clean code organization
- ✅ Proper error handling
- ✅ Accessibility considerations
- ✅ Mobile-first responsive design
- ✅ Performance optimizations

## 🎯 Assignment Status

| Assignment | Status | Features | Tech Stack |
|------------|--------|----------|------------|
| Shopping Cart App | ✅ Complete | Cart management, persistence, responsive | React, Vite, CSS |
| Mini Greeting App | ✅ Complete | Form validation, real-time feedback | React, Vite, CSS |

## 📧 Contact

For any questions or feedback regarding these assignments, please reach out through the appropriate channels.

---

**Note:** This repository showcases practical React.js development skills including state management, form handling, validation, and responsive design principles.