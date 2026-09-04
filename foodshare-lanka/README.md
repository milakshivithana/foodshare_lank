# FoodShare Lanka – Food Waste Donation & Redistribution Platform

A focused SE3090 Mini Hackathon MVP connecting surplus-food donors with recipient organizations in Sri Lanka.

## Problem
Restaurants, bakeries, hotels, supermarkets, event organizers and households can have safe surplus food while charities, shelters and community organizations need food assistance. FoodShare Lanka provides a simple digital bridge between them.

## Solution
Donors publish surplus food listings. Recipient organizations search and filter available donations, submit requests and track their status. Donors accept/reject requests and progress donations through collection and completion. An admin dashboard provides lightweight platform monitoring.

## Main features
- JWT authentication with DONOR, RECIPIENT and ADMIN roles
- Donor donation CRUD and request management
- Recipient search, filter, sort and request workflow
- Status transitions with server-side validation
- Dashboard statistics and admin monitoring
- Responsive React interface with loading, error and empty states
- MongoDB Atlas persistence and deployment-ready environment variables

## Stack
React + Vite, React Router, JavaScript, modern CSS; Node.js, Express, Mongoose, JWT, bcrypt; MongoDB Atlas; Vercel/Netlify + Render/Railway.

## Structure
- `frontend/` React client
- `backend/` Express REST API
- `AI_PROMPT_LOG.md` record actual AI usage during the hackathon

## Local setup
### Backend
1. `cd backend`
2. `npm install`
3. Copy `.env.example` to `.env` and set values.
4. `npm run seed` to load demo data.
5. `npm run dev`

### Frontend
1. `cd frontend`
2. `npm install`
3. Copy `.env.example` to `.env`.
4. `npm run dev`

## Environment variables
Backend: `PORT`, `MONGODB_URI`, `JWT_SECRET`, `CLIENT_URL`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`.
Frontend: `VITE_API_URL`.

## Demo accounts
- Donor: `donor@example.com`
- Recipient: `recipient@example.com`
- Admin: `admin@example.com`
- Seed password: `Demo12345!`

Change/remove demo credentials before any non-demo production use.

## API overview
### Auth
`POST /api/auth/register` · `POST /api/auth/login` · `GET /api/auth/me`
### Donations
`GET /api/donations` · `GET /api/donations/:id` · `POST /api/donations` · `PUT /api/donations/:id` · `DELETE /api/donations/:id` · `PATCH /api/donations/:id/status`
### Requests
`POST /api/requests` · `GET /api/requests/my` · `GET /api/requests/donor/my` · `GET /api/requests/donation/:donationId` · `PATCH /api/requests/:id/status` · `DELETE /api/requests/:id`
### Admin
`GET /api/admin/stats` · `GET /api/admin/users` · `GET /api/admin/donations` · `GET /api/admin/requests` · `PATCH /api/admin/users/:id/toggle` · `DELETE /api/admin/donations/:id`
### Health
`GET /api/health`

## Deployment
- MongoDB: MongoDB Atlas
- Backend: Render/Railway. Set backend environment variables and `CLIENT_URL` to the deployed frontend origin.
- Frontend: Vercel/Netlify. Set `VITE_API_URL` to the deployed API URL, e.g. `https://your-api.onrender.com/api`.

## Team
- Member 1 — NAME / ID — contribution
- Member 2 — NAME / ID — contribution
- Member 3 — NAME / ID — contribution
- Member 4 — NAME / ID — contribution

## Links
- Git repository: `YOUR_GITHUB_LINK`
- Deployed application: `YOUR_DEPLOYED_LINK`
- Demonstration video: `YOUR_VIDEO_LINK`

## AI usage declaration
Complete `AI_PROMPT_LOG.md` with the actual tools, exact prompts, purpose and verification/modification performed. Do not fabricate entries. Team contribution statements should be written by the team in their own words.

## SE3090 submission checklist
- [ ] Public deployment tested in incognito/private mode
- [ ] Meaningful commits from all members
- [ ] README complete
- [ ] AI usage declared in README and submission PDF
- [ ] AI Prompt Log included in submission PDF
- [ ] Two-minute demo recorded
- [ ] Final PDF contains repository, deployment, video, team details, problem/solution and technologies/AI tools
