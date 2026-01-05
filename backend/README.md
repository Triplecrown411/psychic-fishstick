# Backend - MiniKit Express Server

A Node.js/TypeScript backend server that handles World ID verification and payment processing for the MiniKit application.

## 🎯 Overview

This Express.js server provides secure endpoints for:
- **World ID Verification**: Validates World ID proofs from the frontend
- **Payment Processing**: Manages payment initiation and confirmation
- **CORS Support**: Enables cross-origin requests from the frontend

## 🏗️ Project Structure

```
backend/
├── index.ts                # Server entry point and route definitions
├── src/
│   ├── verify.ts          # World ID proof verification handler
│   ├── initiate-payment.ts # Payment initialization handler
│   └── confirm-payment.ts  # Payment confirmation handler
├── package.json           # Dependencies and scripts
└── tsconfig.json         # TypeScript configuration
```

## 🚀 Getting Started

### Install Dependencies

```bash
pnpm install
```

### Start Development Server

```bash
pnpm run dev
```

The server will start on `http://localhost:3000` with auto-reload enabled.

## 📡 API Endpoints

### Health Check
```
GET /ping
```
Returns a simple pong response to verify the server is running.

**Response:**
```
minikit-example pong v1
```

### World ID Verification
```
POST /verify
```
Validates a World ID proof submitted from the frontend.

**Request Body:**
```json
{
  "payload": { /* World ID proof payload */ },
  "action": "verify-action",
  "signal": "optional-signal"
}
```

**Response:**
- `200`: Verification successful
- `400`: Invalid proof or verification failed

### Initiate Payment
```
POST /initiate-payment
```
Creates a new payment transaction and returns a reference ID.

**Response:**
```json
{
  "id": "payment-reference-id"
}
```

### Confirm Payment
```
POST /confirm-payment
```
Confirms a payment transaction after it has been processed.

**Request Body:**
```json
{
  "reference": "payment-reference-id",
  "transactionHash": "0x..."
}
```

## 🔧 Configuration

### Port Configuration
The server runs on port `3000` by default. To change this, modify the `port` variable in `index.ts`:

```typescript
const port = process.env.PORT || 3000;
```

### CORS Configuration
CORS is enabled for all origins. For production, restrict this to specific domains:

```typescript
app.use(cors({
  origin: 'https://your-frontend-domain.com'
}));
```

### Proxy Configuration
The server is configured to trust proxies (required for ngrok):

```typescript
app.set("trust proxy", true);
```

## 🛠️ Technologies

- **Express.js**: Web framework for Node.js
- **TypeScript**: Type-safe JavaScript
- **tsx**: TypeScript execution environment with watch mode
- **pino-pretty**: Pretty-print logging
- **CORS**: Cross-Origin Resource Sharing middleware
- **@worldcoin/minikit-js**: Worldcoin MiniKit SDK

## 📝 Development

### Watch Mode
The development server uses `tsx watch` for automatic reloading when files change:

```bash
pnpm run dev
```

### Logging
Logs are formatted with `pino-pretty` for better readability during development.

### TypeScript Configuration
TypeScript settings are configured in `tsconfig.json`. The project uses ES modules (type: "module" in package.json).

## 🔒 Security Considerations

1. **Environment Variables**: Store sensitive data (API keys, secrets) in environment variables
2. **Input Validation**: Always validate and sanitize incoming request data
3. **CORS**: Restrict CORS origins in production
4. **Rate Limiting**: Consider adding rate limiting for production deployments
5. **HTTPS**: Always use HTTPS in production (ngrok provides this automatically)

## 📚 API Handler Details

### verify.ts
Handles World ID proof verification by:
- Validating the proof structure
- Verifying the proof against World ID contracts
- Checking the action and signal parameters
- Returning verification status

### initiate-payment.ts
Manages payment initiation by:
- Generating a unique payment reference
- Storing payment intent
- Returning reference ID to frontend

### confirm-payment.ts
Handles payment confirmation by:
- Verifying transaction on blockchain
- Updating payment status
- Confirming successful payment

## 🔗 Resources

- [Express.js Documentation](https://expressjs.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [MiniKit Documentation](https://docs.worldcoin.org/minikit)
- [World ID Documentation](https://docs.worldcoin.org/)
