"use client"
import React from 'react'
import { sidebarLinks } from '@app/constants'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const BottomBar = () => {
    const pathname = usePathname()
  return (
    <div className='flex bottom-0 z-20 w-full bg-dark-1 px-6 py-3 items-center justify-between md:hidden '>
         {
            sidebarLinks.map(link=>{
                const isActive = pathname===link.route

                return(
                    <Link className={`flex gap-2  rounded-lg py-2 px-4 ${isActive && "bg-purple-1"}`} href={link.route}>{link.icon} <p className='text-small-medium max-sm:hidden text-light-1'>{link.label}</p></Link>
                )
            })
         }
    </div>
  )
}

export default BottomBar