"use client"
import { SignOutButton, SignedIn } from '@clerk/nextjs'
import { Add, Logout, Search } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const TopBar = () => {
  const [search,setSearch] = useState("")
  const router = useRouter()
  return (
    <div className='flex justify-between items-center mt-6'>
      <div className='relative'>
          <input type="text" className='search-bar' placeholder='Search Posts/People' value={search} onChange={e=>setSearch(e.target.value)} />
          <Search className='search-icon' onClick={()=>{}} />
      </div>

      <button className='create-post-btn' onClick={()=>router.push("/create-post")}>
        <Add/><p>Create A Post</p></button>
        <div className='flex gap-3'>
        <SignedIn>
                <SignOutButton>
                    <div className='flex cursor-pointer gap-4 items-center md:hidden'>
                    <Logout sx={{color:"white",fontSize:"32px"}}/>
                   {/* <p className='text-body-bold text-light-1'>Log Out</p> */}
                    </div>
                </SignOutButton>
            </SignedIn>

            <Link href={"/"} className='relative w-12 h-12'>
          <Image src={"https://images.pexels.com/photos/12698454/pexels-photo-12698454.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} fill className='rounded-[50%] md:hidden ' alt=''/>
        </Link>
        </div>

        
    </div>
  )
}

export default TopBar