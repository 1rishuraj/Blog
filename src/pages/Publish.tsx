import { useState } from 'react'
import { Appbar } from '../components/Appbar'
import { Backend_Url } from '../config';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export const Publish = () => {
    const nav=useNavigate();
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");
    async function onclick() {
        const res=await axios.post(`${Backend_Url}/api/v1/blog`,{
            title,
            content
        },{
            headers:{
                Authorization:"Bearer "+localStorage.getItem("token")
            }
        })
        console.log(res)
        nav('/blog/'+res.data.blogid)
    }
  return (
    <div >
        <Appbar />
        <div className='flex flex-col w-screen items-center'>
            <input onChange={(e)=>{setTitle(e.target.value)}} className="min-w-xs lg:min-w-2xl p-2 my-5 rounded focus:outline-none border border-2 border-gray-300 bg-gray-50 " type="text" placeholder='Give title to your Blog!' />
            <textarea onChange={(e)=>{setContent(e.target.value)}} id="message" rows={7}className="block p-2.5 min-w-xs lg:min-w-2xl  mb-3 bg-gray-50 rounded border border-2 border-gray-300 focus:outline-none   " placeholder="Write your thoughts here..."></textarea>
            <div className='px-3 py-2'>
            <button onClick={onclick} type="submit" className="py-2.5 px-4 font-medium text-center text-white bg-gray-700 rounded-lg focus:ring-4 focus:ring-gray-200 hover:bg-slate-800">
               Publish Post
           </button>
           </div>
        </div>
    </div>
  )
}

