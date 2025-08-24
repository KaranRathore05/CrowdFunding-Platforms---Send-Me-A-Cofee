"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from "next-auth/react"

const Dashborad = () => {
    const { data: session } = useSession()
  
    if (!session) {
         const router = useRouter()
        router.push('/login')
    }
    return (
        <div>dashborad</div>
    )
}

export default Dashborad