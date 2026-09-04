# FoodShare Lanka API

Express + MongoDB/Mongoose REST API for the FoodShare Lanka MVP.

Run locally:

```bash
npm install
# Copy .env.example to .env, then set MONGODB_URI to the connection string
# from MongoDB Atlas (Database > Connect > Drivers).
npm run seed
npm run dev
```

The Atlas connection string must use your real cluster host, not the example
`<your-cluster-host>` value. In Atlas, add your development IP address under
Network Access before starting the API.

Health check: `GET /api/health`.
