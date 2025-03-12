import React from 'react'; // Ensure React is imported
import { useAtomValue } from "jotai"
import { Avatar} from "./BlogCard"
import { Link } from "react-router-dom"
import { nameatom } from "../store/atoms/name"
export const Appbar = () => {
  const naam=useAtomValue(nameatom)
  return (
    <div >
        <div className='flex justify-between items-center p-4 mx-10 roboto-custom'>
        <Link to="/blogs"><Logo/></Link>
        <div className="flex items-center">
        <Link to="/publish"><button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-5 ">Publish</button></Link>
        <Avatar name={naam}/> 
        </div>
        </div>
        <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-200"/>
    </div>
  )
}
function Logo(){
    return <div>
        
        <div className="font-bold text-2xl flex items-center gap-2 ">
            <div>Medium</div>
            <div >
            <div  className={`flex items-center justify-center w-2 h-2 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-500`}>
            </div>
            </div>
        </div>
        
    </div>
}
