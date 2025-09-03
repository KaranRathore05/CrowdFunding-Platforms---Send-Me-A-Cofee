import PaymentPage from "@/components/PaymentPage";
import React from "react";
import { notFound } from "next/navigation";
import connectDb from "@/db/connectdb";
import User from "@/models/user";

// The corrected component
const Username = async ({ params }) => {
  await connectDb();

  // Corrected line
  const { username } = await params;

  const u = await User.findOne({ username });

  if (!u) {
    return notFound();
  }

  return (
    <>
      <PaymentPage username={username} />
    </>
  );
};

export default Username;

// The corrected generateMetadata function
export async function generateMetadata({ params }) {
  // Corrected line
  const { username } = await params;

  return {
    title: `Support ${username} - Get Me A Chai`,
  };
}