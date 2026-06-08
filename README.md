# ☕ Get Me A Chai - Crowdfunding Platform

A modern crowdfunding platform inspired by Buy Me A Coffee, where creators can receive support and donations from their audience. Users can sign in with GitHub, create their profile, and receive contributions from supporters.

---

## 🚀 Features

### Authentication
- GitHub OAuth Login using NextAuth.js
- Secure session management
- Protected user dashboard
- User profile creation

### Creator Dashboard
- Manage creator profile
- Customize profile information
- View supporter details
- Track donations and contributions

### Donations & Payments
- Support creators with contributions
- Secure payment processing
- Donation tracking
- Contribution history

### User Profiles
- Creator-specific pages
- Profile customization
- Social presence
- Public donation page

### Modern UI
- Responsive design
- Mobile-friendly interface
- Clean and modern layout
- Fast performance with Next.js

---

## 🛠️ Tech Stack

### Frontend
- Next.js
- React.js
- Tailwind CSS
- JavaScript / TypeScript

### Backend
- Next.js API Routes
- NextAuth.js

### Database
- MongoDB
- Mongoose

### Authentication
- GitHub OAuth
- NextAuth.js

### Deployment
- Vercel

---

## 📂 Project Structure

```text
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
├── styles/
├── .env.local
├── next.config.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/get-me-a-chai.git
cd get-me-a-chai
```

### 2. Install Dependencies

```bash
npm install
```

or

```bash
yarn install
```

### 3. Setup Environment Variables

Create a `.env.local` file:

```env
# GitHub OAuth
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_key

# MongoDB
MONGODB_URI=your_mongodb_connection_string

# Razorpay (Optional)
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret
```

---

## 🔐 GitHub OAuth Setup

### Step 1: Create OAuth App

Go to:

https://github.com/settings/developers

Click **New OAuth App**

### Step 2: Fill Details

**Application Name**

```text
Get Me A Chai
```

**Homepage URL**

```text
http://localhost:3000
```

**Authorization Callback URL**

```text
http://localhost:3000/api/auth/callback/github
```

### Step 3: Production Callback URL

After deployment update the callback URL:

```text
https://your-vercel-domain.vercel.app/api/auth/callback/github
```

Example:

```text
https://crowd-funding-platforms-send-me-a-c-psi.vercel.app/api/auth/callback/github
```

### Step 4: Save Credentials

Copy:

```text
Client ID
Client Secret
```

Add them to:

```env
GITHUB_ID=
GITHUB_SECRET=
```

---

## 🍃 MongoDB Setup

### Create MongoDB Atlas Cluster

1. Create MongoDB Atlas account
2. Create cluster
3. Create database user
4. Add IP to Network Access
5. Copy connection string

Example:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/getmeachai
```

---

## ▶️ Run Locally

```bash
npm run dev
```

Application will run at:

```text
http://localhost:3000
```

---

## 🚀 Deployment

### Deploy to Vercel

1. Push project to GitHub

```bash
git add .
git commit -m "Initial Commit"
git push origin main
```

2. Import repository into Vercel

3. Add Environment Variables:

```env
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_URL=
NEXTAUTH_SECRET=
MONGODB_URI=
```

4. Deploy project

---

## 🔄 Update GitHub OAuth After Deployment

Update OAuth App settings:

**Homepage URL**

```text
https://your-app.vercel.app
```

**Authorization Callback URL**

```text
https://your-app.vercel.app/api/auth/callback/github
```

Without this update GitHub authentication will fail.

---

## 📸 Screenshots

### Home Page

Add screenshot here.

### Dashboard

Add screenshot here.

### Creator Profile

Add screenshot here.

### Donation Page

Add screenshot here.

---

## 🔒 Security Features

- OAuth Authentication
- Protected Routes
- Session Management
- Environment Variable Security
- Database Validation
- Middleware Protection

---

## 📈 Future Improvements

- Google Authentication
- Email Authentication
- Stripe Integration
- Donation Goals
- Monthly Memberships
- Creator Verification
- Analytics Dashboard
- Leaderboards
- Comment System
- Dark Mode

---

## 🐛 Common Errors

### GitHub Login Error

#### Cause

Incorrect OAuth callback URL.

#### Fix

```text
https://your-domain.vercel.app/api/auth/callback/github
```

Make sure it matches exactly in GitHub OAuth settings.

---

### MongoDB Connection Error

Verify:

```env
MONGODB_URI
```

and ensure Atlas allows incoming connections.

---

### NextAuth Error

Verify:

```env
NEXTAUTH_URL
NEXTAUTH_SECRET
```

are correctly configured.

---

## 🤝 Contributing

### Fork Repository

Create a feature branch:

```bash
git checkout -b feature-name
```

Commit changes:

```bash
git commit -m "Added new feature"
```

Push changes:

```bash
git push origin feature-name
```

Create a Pull Request.

---
AI Used - Chatgpt

## 👨‍💻 Author

**Karanpal Singh**

- Full Stack Developer
- Next.js Developer
- Open Source Enthusiast

---

## ⭐ Support

If you found this project useful:

- ⭐ Star the repository
- 🍴 Fork the project
- 🛠️ Contribute to development

---

## 📄 License

MIT License © 2026 Karanpal Singh
