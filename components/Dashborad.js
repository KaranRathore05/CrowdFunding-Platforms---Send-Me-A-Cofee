"use client"
import React, { useEffect, useState } from 'react'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { fetchuser } from '@/actions/useractions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { updateProfile } from '@/actions/useractions';

const Dashboard = () => {
  const { data: session ,update } = useSession()
  const router = useRouter()

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
    profilepic: "",
    coverpic: "",
    razorpayid: "",
    razorpaysecret: ""
  });

  useEffect(() => {
    if (session === undefined) return; // wait for session to resolve
    if (!session) {
      router.push('/login')
    } else {
      getData()
    }
  }, [session])

  const getData = async () => {
    if (!session?.user?.name) return
    let u = await fetchuser(session.user.name)
    if (u) {
      setForm({
        ...form,
        ...u, // merge with defaults so all fields exist
      })
    }
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    
    if (!session?.user?.name) return

    await updateProfile(form, session.user.name)
    toast.success('Profile Updated', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      theme: "light",
      transition: Bounce,
    });
  }

  return (
    <>
      <ToastContainer />
      <div className='container mx-auto py-5 px-6'>
        <h1 className='text-center my-5 text-3xl font-bold'>
          Welcome to your Dashboard
        </h1>

        <form className="max-w-2xl mx-auto" action={handleSubmit}>
          {/* Name */}
          <div className='my-2'>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
            <input value={form.name || ""} onChange={handleChange} type="text" name='name' id="name" className="block w-full p-2 border rounded-lg" />
          </div>

          {/* Email */}
          <div className="my-2">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
            <input value={form.email || ""} onChange={handleChange} type="email" name='email' id="email" className="block w-full p-2 border rounded-lg" />
          </div>

          {/* Username */}
          <div className='my-2'>
            <label htmlFor="username" className="block mb-2 text-sm font-medium">Username</label>
            <input value={form.username || ""} onChange={handleChange} type="text" name='username' id="username" className="block w-full p-2 border rounded-lg" />
          </div>

          {/* Profile Pic */}
          <div className="my-2">
            <label htmlFor="profilepic" className="block mb-2 text-sm font-medium">Profile Picture</label>
            <input value={form.profilepic || ""} onChange={handleChange} type="text" name='profilepic' id="profilepic" className="block w-full p-2 border rounded-lg" />
          </div>

          {/* Cover Pic */}
          <div className="my-2">
            <label htmlFor="coverpic" className="block mb-2 text-sm font-medium">Cover Picture</label>
            <input value={form.coverpic || ""} onChange={handleChange} type="text" name='coverpic' id="coverpic" className="block w-full p-2 border rounded-lg" />
          </div>

          {/* Razorpay Id */}
          <div className="my-2">
            <label htmlFor="razorpayid" className="block mb-2 text-sm font-medium">Razorpay Id</label>
            <input value={form.razorpayid || ""} onChange={handleChange} type="text" name='razorpayid' id="razorpayid" className="block w-full p-2 border rounded-lg" />
          </div>

          {/* Razorpay Secret */}
          <div className="my-2">
            <label htmlFor="razorpaysecret" className="block mb-2 text-sm font-medium">Razorpay Secret</label>
            <input value={form.razorpaysecret || ""} onChange={handleChange} type="text" name='razorpaysecret' id="razorpaysecret" className="block w-full p-2 border rounded-lg" />
          </div>

          {/* Submit Button */}
          <div className="my-6">
            <button type="submit" className="block w-full p-2 text-white bg-blue-500 rounded-lg">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Dashboard
