# MiniKit VanillaJS Example Application

A demonstration application showcasing [Worldcoin MiniKit](https://docs.worldcoin.org/minikit) integration with vanilla JavaScript. This template provides examples of identity verification and payment functionality using MiniKit's SDK.

## 🌟 Features

- **World ID Verification**: Implement privacy-preserving identity verification using Worldcoin's World ID protocol
- **Payment Integration**: Send cryptocurrency payments (ETH) through the Worldcoin app
- **VanillaJS Frontend**: Lightweight frontend using MiniKit via CDN delivery
- **Express Backend**: Node.js/TypeScript backend for secure verification and payment processing
- **Nginx Proxy Setup**: Configuration for serving multiple local applications through a single ngrok tunnel

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **pnpm** - Fast, disk space efficient package manager
- **nginx** - Web server for reverse proxy (install via your preferred package manager)
- **ngrok** - For creating secure tunnels to localhost ([create free account](https://ngrok.com/docs/getting-started/))

## 🚀 Quick Start

### 1. Install Dependencies

```bash
# Install frontend dependencies
cd frontend && pnpm i

# Install backend dependencies
cd ../backend && pnpm i
```

### 2. Configure nginx

To serve multiple localhost applications through a single ngrok tunnel (only one available for free-tier users), use nginx as a reverse proxy:

```bash
# From the root directory of this repo
sudo nginx -c $(pwd)/nginx.conf

# Or specify the full path
sudo nginx -c /full/path/to/this/repo/nginx.conf
```

To stop nginx:
```bash
sudo nginx -s stop
```

### 3. Start the Applications

```bash
# Terminal 1: Start the backend server (runs on port 3000)
cd backend
pnpm run dev

# Terminal 2: Start the frontend dev server (runs on port 5173)
cd frontend
pnpm run dev
```

### 4. Create ngrok Tunnel

```bash
# Create a tunnel on port 8080 (must match the 'listen' port in nginx.conf)
ngrok http 8080
```

Copy the ngrok URL (e.g., `https://xxxx.ngrok.io`) and use it to access your application.

## 📂 Project Structure

```
.
├── frontend/          # VanillaJS frontend application
│   ├── index.html    # Main HTML page
│   ├── main.js       # Application entry point
│   ├── Pay/          # Payment component
│   └── Verify/       # Verification component
├── backend/          # Express.js backend
│   ├── index.ts      # Server entry point
│   └── src/          # API handlers
│       ├── verify.ts             # World ID verification endpoint
│       ├── initiate-payment.ts   # Payment initiation endpoint
│       └── confirm-payment.ts    # Payment confirmation endpoint
├── nginx.conf        # Nginx reverse proxy configuration
└── README.md         # This file
```

## 🔧 API Endpoints

The backend exposes the following endpoints:

- `GET /ping` - Health check endpoint
- `POST /verify` - Verify World ID proof
- `POST /initiate-payment` - Initialize a payment transaction
- `POST /confirm-payment` - Confirm a payment transaction

## 📖 Additional Documentation

- [Frontend README](./frontend/README.md) - Details about the frontend implementation
- [Backend README](./backend/README.md) - Backend API and setup information
- [MiniKit Documentation](https://docs.worldcoin.org/minikit) - Official MiniKit documentation

## 🛠️ Development

### Frontend Development
The frontend uses Vite for fast development and hot module replacement (HMR).

```bash
cd frontend
pnpm run dev      # Start dev server
pnpm run build    # Build for production
pnpm run preview  # Preview production build
```

### Backend Development
The backend uses `tsx` with watch mode for automatic reloading.

```bash
cd backend
pnpm run dev      # Start development server with auto-reload
```

## 📝 License

This is a template repository for demonstration purposes.

## 🔗 Resources

- [Worldcoin Developer Portal](https://docs.worldcoin.org/)
- [MiniKit JS Documentation](https://docs.worldcoin.org/minikit)
- [Worldcoin GitHub](https://github.com/worldcoin)
