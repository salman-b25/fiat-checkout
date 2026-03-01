# 🛒 Fiat Checkout – Frontend Assignment

A modern, responsive checkout experience built with **React + Vite**, featuring modular component architecture, real-time form validation, and dynamic success/error redirection.

This project demonstrates a clean **design → development → deployment** frontend workflow.

---

## 🚀 Live Demo

🔗 **View Live Project:**  
https://fiat-checkout-nu.vercel.app/

---

## 🏗️ Project Architecture

```
src/
├── assets/                  # SVG icons (back-icon, card types, etc.)
├── components/              # Reusable UI components
│   ├── CheckoutHeader.jsx
|   |── CheckoutPage.jsx
│   ├── ItemSummary.jsx
│   ├── PaymentForm.jsx
│   └── SecurityFooter.jsx
├── pages/                   # View-level components
│   ├── SuccessPage.jsx
│   └── ErrorPage.jsx
├── styles/                  # Modular CSS structure
├── App.jsx                  # Root component & routing
└── main.jsx                 # Application entry point
```

---

## 🛠️ Tech Stack

| Layer          | Technology                     |
|---------------|--------------------------------|
| Framework     | React 19                       |
| Build Tool    | Vite                           |
| Styling       | Custom CSS (Modular Structure) |
| Deployment    | Vercel                         |
| Version Control | Git & GitHub                |

---

## 📈 Level-wise Implementation

### ✅ Level 1 – UI Implementation
- Pixel-perfect conversion from Figma design  
- Fully responsive layout (mobile-first approach)  
- Custom SVG integration for UI icons and navigation  
- Clean component-based structure  

---

### ✅ Level 2 – Form Behavior & Validation
- Real-time validation for:
  - Cardholder Name
  - Card Number
  - Expiry Date
  - CVV
- Dynamic error styling (red borders + helper text)
- Input masking:
  - Automatic spacing for card number
  - Auto-format for expiry (MM/YY)

---

### ✅ Level 3 – Payment API Integration (Beeceptor)

Integrated a mock payment API using **Beeceptor** to simulate real backend behavior.

Payment flow:

- On clicking **Pay Now**, a POST request is sent to the Beeceptor endpoint.
- The API evaluates the card number.

#### Payment Rule:

- ❌ If the card number is:
  
  `0000 0000 0000 0000`
  
  → API responds with failure  
  → User is redirected to **Error Page**

- ✅ If the card number contains any other valid numeric value  
  → API responds with success  
  → User is redirected to **Success Page**

This demonstrates:

- Real HTTP request handling
- Async/await logic
- Loading states
- API error handling
- Conditional navigation based on response

---

### ✅ Level 4 – Success & Failure Flow

Based on the API response:

✔️ **Success Page**
- Displays confirmation UI
- Shows order summary
- Provides user feedback

❌ **Error Page**
- Displays failure message
- Allows retry
- Clean error UX handling

Implemented using SPA routing for seamless user experience.

---

### ✅ Level 5 – Deployment

- Deployed via **Vercel**
- Continuous deployment from GitHub
- Optimized production build with Vite
- Case-sensitive path issues handled for Linux build environment

---



## 🏁 Getting Started

### 📌 Prerequisites

- Node.js (v18 or higher)
- npm or yarn

---

### ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/salman-b25/fiat-checkout.git
```

Navigate into the project folder:

```bash
cd fiat-checkout
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## 📦 Production Build

Vite generates optimized static files in the `dist/` folder.

Deployment is configured via Vercel for automatic builds on push to `main`.

---

## 📚 Key Learnings

- Translating Figma Auto Layout to Flexbox
- Handling Linux case-sensitive build errors
- Component modularization best practices
- Controlled form patterns in React
- Clean deployment pipeline setup

---

## 📄 License

This project was developed as part of a frontend assignment and is for educational purposes.

---

## 👨‍💻 Author

**Salman B**  
GitHub: https://github.com/salman-b25
