# Send Me a Chai

A crowdfunding platform where creators can receive support from their audience through quick Razorpay payments.

## Features

- GitHub-based authentication with NextAuth
- Public creator pages (`/@username`) for receiving contributions
- Razorpay order creation and payment verification flow
- Creator dashboard to manage profile, cover image, and Razorpay credentials
- Supporter feed with top recent payments

## Tech Stack

- Next.js 15 (App Router)
- React 19
- MongoDB + Mongoose
- NextAuth
- Razorpay
- Tailwind CSS

## Prerequisites

- Node.js 18+ (recommended)
- npm
- MongoDB instance (local or hosted)
- GitHub OAuth app
- Razorpay account (for accepting payments)

## Setup

1. Clone the repository and install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env.local` file in the project root.
3. Add the required environment variables:

   ```env
   # Database
   MONGODB_URI=mongodb://localhost:27017/send-me-a-chai

   # NextAuth + GitHub OAuth
   GITHUB_ID=your_github_oauth_client_id
   GITHUB_SECRET=your_github_oauth_client_secret
   NEXTAUTH_SECRET=your_nextauth_secret

   # Public app URL (used in payment callback redirect)
   NEXT_PUBLIC_URL=http://localhost:3000

   # Razorpay public key used by checkout
   NEXT_PUBLIC_KEY_ID=your_razorpay_public_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:3000`.

## Creator Payment Configuration

After signing in, open the dashboard and set:
- `razorpayid`
- `razorpaysecret`

These are used server-side to create and verify payment orders for that creator.

## Available Scripts

- `npm run dev` – start local development server
- `npm run build` – create production build
- `npm run start` – run production server
- `npm run lint` – run ESLint

## Notes

- Do not commit real secrets or keys to the repository.
- If `npm run build` fails in a restricted network, ensure access to `fonts.googleapis.com` (used by `next/font` in `app/layout.js`).
