☕ Get Me A Chai - Crowdfunding Platform

A modern crowdfunding platform inspired by Buy Me A Coffee, where creators can receive support and donations from their audience. Users can sign in with GitHub, create their profile, and receive contributions from supporters.

🚀 Features
Authentication
GitHub OAuth Login using NextAuth.js
Secure session management
Protected user dashboard
User profile creation
Creator Dashboard
Manage creator profile
Customize profile information
View supporter details
Track donations and contributions
Donations & Payments
Support creators with contributions
Secure payment processing
Donation tracking
Contribution history
User Profiles
Creator-specific pages
Profile customization
Social presence
Public donation page
Modern UI
Responsive design
Mobile-friendly interface
Clean and modern layout
Fast performance with Next.js
🛠️ Tech Stack
Frontend
Next.js
React.js
Tailwind CSS
JavaScript / TypeScript
Backend
Next.js API Routes
NextAuth.js
Database
MongoDB
Mongoose
Authentication
GitHub OAuth
NextAuth.js
Deployment
Vercel
📂 Project Structure
get-me-a-chai/
│
├── app/
│   ├── api/
│   │   ├── auth/
│   │   └── payments/
│   │
│   ├── dashboard/
│   ├── profile/
│   ├── payment/
│   └── page.js
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── PaymentForm.jsx
│   └── Dashboard.jsx
│
├── models/
│   ├── User.js
│   └── Payment.js
│
├── lib/
│   ├── mongodb.js
│   └── auth.js
│
├── public/
│
├── styles/
│
├── .env.local
├── next.config.js
├── package.json
└── README.md
⚙️ Installation
1. Clone Repository
git clone https://github.com/yourusername/get-me-a-chai.git

cd get-me-a-chai
2. Install Dependencies
npm install

or

yarn install
3. Setup Environment Variables

Create a .env.local file in the root directory:

# GitHub OAuth
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_key

# MongoDB
MONGODB_URI=your_mongodb_connection_string

# Payment Gateway (Optional)
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret
🔐 GitHub OAuth Setup
Step 1: Create OAuth App

Visit:

https://github.com/settings/developers

Click:

New OAuth App
Step 2: Fill Details
Application Name
Get Me A Chai
Homepage URL
http://localhost:3000
Authorization Callback URL
http://localhost:3000/api/auth/callback/github
Step 3: Production Callback URL

After deployment update:

https://your-vercel-domain.vercel.app/api/auth/callback/github

Example:

https://crowd-funding-platforms-send-me-a-c-psi.vercel.app/api/auth/callback/github
Step 4: Save Credentials

Copy:

Client ID
Client Secret

Add them to:

GITHUB_ID=
GITHUB_SECRET=
🍃 MongoDB Setup
Create MongoDB Atlas Cluster
Sign up on MongoDB Atlas
Create a cluster
Create database user
Whitelist IP address
Get connection string

Example:

MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/getmeachai
▶️ Run Locally
npm run dev

Application runs on:

http://localhost:3000
🚀 Deployment on Vercel
Step 1

Push code to GitHub.

Step 2

Import repository into Vercel.

Step 3

Add Environment Variables:

GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_URL=
NEXTAUTH_SECRET=
MONGODB_URI=
Step 4

Deploy.

🔄 Updating GitHub OAuth After Deployment

Update OAuth settings:

Homepage URL
https://your-app.vercel.app
Callback URL
https://your-app.vercel.app/api/auth/callback/github

Without this update GitHub login will fail with errors such as:

redirect_uri_mismatch
OAuthCallbackError
Access Denied
📸 Screenshots
Home Page
Add screenshot here
Dashboard
Add screenshot here
Creator Profile
Add screenshot here
Donation Page
Add screenshot here
🔒 Security Features
OAuth Authentication
Protected Routes
Session Management
Secure Environment Variables
Database Validation
Authentication Middleware
📈 Future Improvements
Google Authentication
Email Authentication
Creator Verification
Donation Goals
Analytics Dashboard
Monthly Memberships
Stripe Integration
Leaderboards
Comment System
Dark Mode
🐛 Common Errors
GitHub Login Error
Cause

Incorrect callback URL.

Fix
https://your-domain.vercel.app/api/auth/callback/github

must match exactly in GitHub OAuth settings.

MongoDB Connection Error

Check:

MONGODB_URI

and ensure Atlas network access allows connections.

NextAuth Error

Verify:

NEXTAUTH_URL
NEXTAUTH_SECRET

are correctly configured.

🤝 Contributing
Fork the repository
Create feature branch
git checkout -b feature-name
Commit changes
git commit -m "Added new feature"
Push branch
git push origin feature-name
Create Pull Request
👨‍💻 Author

Karanpal Singh

Full Stack Developer
Next.js Enthusiast
Open Source Contributor
⭐ Support

If you found this project useful:

⭐ Star the repository
🍴 Fork the project
🛠️ Contribute to development
📄 License

This project is licensed under the MIT License.

MIT License © 2026 Karanpal Singh
