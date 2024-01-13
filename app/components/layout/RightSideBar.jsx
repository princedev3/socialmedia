import React from 'react'

const RightSideBar = () => {
  return (
    <div className='sticky right-0 top-0 h-screen w-[300px] xl:w-[350px] py-6 flex flex-col gap-12 overflow-auto pl-6 pr-10 max-lg:hidden '>
      <div className='flex flex-col gap-4'>
         <h4 className='text-heading4-bold text-light-1'>Following</h4>
         <div className='flex flex-col gap-4 text-light-1'>Maping user</div>
      </div>

      <div className='flex flex-col gap-4'>
         <h4 className='text-heading4-bold text-light-1'>Suggested people</h4>
         <div className='flex flex-col gap-4 text-light-1'>Maping user</div>
      </div>
     
    </div>
  )
}

export default RightSideBar