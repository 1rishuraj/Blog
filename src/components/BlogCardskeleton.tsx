import React from 'react'
import { Avatar, Circle } from './BlogCard'
import { Appbar } from './Appbar'
export const BlogCardskeleton = () => {
  return (
    <div>
         <div className='roboto-custom cursor-pointer'>
         <div className='flex flex-col p-2 w-screen max-w-2xl '>
        <div role="status" className="max-w-sm animate-pulse">       
                        <div className='flex items-center gap-2'>
                            <div><Avatar name="" /></div>
                            <div>
                            <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4 "></div>
                            </div>
                            <div >
                                <Circle size={2}/>
                            </div>
                            <div className='text-slate-500'>
                            <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
                            </div>
                        </div>
                        <div className='font-bold text-2xl my-1'>
                        <div className="h-2 bg-gray-200 rounded-full  w-150 mb-2.5"></div>
                        </div>
                        <div className='font-light text-lg'>
                        <div className="h-2 bg-gray-200 rounded-full w-150 mb-2.5"></div>
                        </div>
                        <div className='my-5 font-normal text-sm text-gray-500'>
                        <div className="h-2 bg-gray-200 rounded-full  w-150 mb-2.5"></div>
                        </div>
                        <hr className="h-px my-2 bg-gray-200 border-0 "/>
                    </div>
        </div >
        </div>
    </div>
  )
}

