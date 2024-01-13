"use client"
import React from 'react'
import TopBar from './TopBar'
import { usePathname } from 'next/navigation'
import { pageTitles } from '@app/constants'

const MainContainer = ({children}) => {
  const currentPath = usePathname()
  const reqex = /^\/([^\/]+)/
  const firstPart = currentPath.match(reqex)?currentPath.match(reqex)[0]:currentPath
  const title = pageTitles.find(page => page.url ===firstPart)?.title || ""
  return (
    <section className='flex flex-col flex-1 max-w-3xl px-4 md:px-10 lg:px-4 xl:px-20'>
      <TopBar/>
      <div>
          <div className='mt-6 mb-20'>
             <h1 className='mb-5 text-heading2-bold max-sm:text-heading3-bold text-light-1'>{title}</h1>
             <div className='h-screen overflow-y-scroll custom-scrollbar'>{children}</div> 
          </div>
      </div>
    </section>
  )
}

export default MainContainer