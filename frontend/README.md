# Frontend - MiniKit VanillaJS Application

A lightweight frontend application demonstrating MiniKit integration using vanilla JavaScript and Vite.

## 🎯 Overview

This frontend application showcases how to integrate Worldcoin's MiniKit SDK in a vanilla JavaScript environment. It demonstrates two key features:
- **World ID Verification**: Privacy-preserving identity verification
- **Payment Processing**: Cryptocurrency payment functionality

## 📦 MiniKit Delivery

This template uses **CDN delivery** of MiniKit for simplicity and quick integration:

```javascript
import { MiniKit } from "https://cdn.jsdelivr.net/npm/@worldcoin/minikit-js@1.1.1/+esm";
```

**Alternative**: If you prefer using the NPM package instead, see the [React template](https://github.com/worldcoin/minikit-react-template) for reference.

## 🏗️ Project Structure

```
frontend/
├── index.html          # Main HTML entry point
├── main.js            # Application initialization
├── index.css          # Global styles
├── Pay/               # Payment component
│   └── index.jsx      # Payment functionality
├── Verify/            # Verification component
│   └── index.jsx      # World ID verification
├── tailwind.config.js # Tailwind CSS configuration
└── package.json       # Dependencies and scripts
```

## 🚀 Getting Started

### Install Dependencies

```bash
pnpm install
```

### Development

Start the development server with hot module replacement:

```bash
pnpm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
pnpm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
pnpm run preview
```

## 🔑 Key Components

### Verification Component (`Verify/index.jsx`)

Handles World ID verification flow:
1. Checks if MiniKit is installed
2. Initiates verification request
3. Sends proof to backend for validation
4. Displays verification result

### Payment Component (`Pay/index.jsx`)

Manages payment transactions:
1. Initiates payment with backend
2. Sends payment request through MiniKit
3. Specifies recipient address and token amount
4. Handles payment confirmation

## 🛠️ Technologies

- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **MiniKit JS**: Worldcoin SDK for identity and payments
- **React**: For component structure (mixed with vanilla JS)

## 📝 Configuration

### Environment Variables

Configure your backend URL in the payment and verification components:
- Update `process.env.NEXTAUTH_URL` to point to your backend server
- Default backend runs on `http://localhost:3000`

### Tailwind CSS

The project uses Tailwind CSS for styling. Configuration can be found in:
- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration

## 🔗 Resources

- [MiniKit Documentation](https://docs.worldcoin.org/minikit)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Worldcoin Developer Portal](https://docs.worldcoin.org/)
