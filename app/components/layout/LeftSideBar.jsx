import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import { SignedIn, SignOutButton, UserButton } from '@clerk/nextjs'
import { Logout } from '@mui/icons-material'


const LeftSideBar = () => {
  return (
    <div className='min-h-screen left-0 top-0 sticky overflow-auto py-6 px-6 flex flex-col gap-9 max-md:hidden custom-scrollbar'>
          <Link href={"/"}>
            <Image src={"/logo.png"} alt='' width={200} height={200}/>
          </Link>
          <div className='flex flex-col gap-2'>
            <div  className='flex flex-col gap-2 items-center text-light-1 '>
                <Link href={"/"} className='relative w-12 h-12'>
                    <Image src={"https://images.pexels.com/photos/12698454/pexels-photo-12698454.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} fill alt='' className='rounded-[50%] object-cover'/>
                </Link>
                <p  className='text-small-bold'>marvin prince</p>
            </div>
            <div className='flex text-light-1 justify-between'>
                <div className='flex flex-col items-center'>
                <p>1</p>
                <p>Posts</p>
                </div>
                <div className='flex flex-col items-center'>
                <p>1</p>
                <p>Posts</p>
                </div>
                <div className='flex flex-col items-center'>
                <p>1</p>
                <p>Posts</p>
                </div>
            </div>
            <hr className='my-4'/>
            <Menu/>
             <hr className='my-4'/>
            <div className='flex gap-4 items-center'>
                  <UserButton/>
                  <p className='text-light-1 text-body-bold'>Manage Account</p>
            </div>

            <SignedIn>
                <SignOutButton>
                    <div className='flex cursor-pointer gap-4 items-center'>
                    <Logout sx={{color:"white",fontSize:"32px"}}/>
                   <p className='text-body-bold text-light-1'>Log Out</p>
                    </div>
                </SignOutButton>
            </SignedIn>
          </div>
    </div>
  )
}
  
export default LeftSideBar