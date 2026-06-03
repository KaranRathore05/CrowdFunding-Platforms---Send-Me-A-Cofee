# ☕ Send Me a Chai

A creator-focused crowdfunding platform where supporters can contribute to creators by buying them a virtual chai. The platform provides a simple way for creators to receive support while allowing contributors to leave personalized messages.

## Features

* Secure authentication using GitHub OAuth
* Razorpay payment integration
* Creator profile customization
* Supporter leaderboard
* Personalized messages from contributors
* Contribution history tracking
* Responsive design for desktop and mobile devices
* Real-time updates for donations and supporter activity

## Tech Stack

### Frontend

* Next.js
* React
* Tailwind CSS

### Backend

* Next.js API Routes
* MongoDB
* Mongoose

### Authentication

* NextAuth.js
* GitHub OAuth

### Payments

* Razorpay
* # use significant help of ai like chatgpt

## Project Structure

```bash
Send-Me-A-Chai/
│
├── app/
├── components/
├── models/
├── lib/
├── public/
├── api/
└── utils/
```

## Getting Started

### Clone the Repository

```bash
git clone <repository-url>
cd Send-Me-A-Chai
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env.local` file and add:

```env
MONGODB_URI=
NEXTAUTH_URL=
NEXTAUTH_SECRET=

GITHUB_ID=
GITHUB_SECRET=

RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
```

### Run the Development Server

```bash
npm run dev
```

The application will be available at:

```bash
http://localhost:3000
```

## How It Works

1. Users sign in using GitHub.
2. Every user gets a personalized creator page.
3. Supporters can contribute through Razorpay.
4. Contributors can leave a message along with their support.
5. Donations are recorded and displayed on the creator dashboard.
6. The leaderboard highlights top supporters.

## Challenges Faced

One of the major challenges was handling secure payment integration while maintaining a smooth user experience. Managing authentication, payment verification, and database consistency required careful coordination between the frontend and backend.

## Future Improvements

* Email notifications for new contributions
* Creator analytics dashboard
* Monthly recurring support subscriptions
* Social sharing features
* Multiple payment gateway support

## Learning Outcomes

This project helped me gain practical experience with:

* Full-stack web development using Next.js
* Authentication workflows with OAuth
* Payment gateway integration
* MongoDB database design
* API development
* State management and responsive UI design

## Author

**Karan Rathore**

GitHub: https://github.com/KaranRathore05
