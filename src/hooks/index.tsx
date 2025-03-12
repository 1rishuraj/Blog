import { useEffect, useState } from 'react'
import { Backend_Url } from '../config'
import axios from 'axios'
interface Blogtype{
  "content": string,
  "title": string,
  "id": string,
  "author": {"name": string}
}
export interface SBlogtype{
  "title": string,
  "content": string,
  "author": {
            "name": string
            }
}
export const useSBlog=({id}:{id:string})=>{
  const [sblog,setSBlog]=useState<SBlogtype>()
  const [sloading,setSLoading]=useState(true)
  useEffect(()=>{
    axios.get(`${Backend_Url}/api/v1/blog/${id}`,{
          headers:{
            'Authorization':'Bearer '+localStorage.getItem("token"),
          },
        },)
        .then((resp) => {
          console.log('Response:', resp.data);
          setSBlog(resp.data.res);
          setSLoading(false);
        })
        .catch((err) => {
          console.error('Error:', err);
          
        });
    
  },[])
  return (
    {
      sblog, sloading
    }
  ) 
}


export const useBlogs = () => {
  const [blogs,setBlogs]=useState<Blogtype[]>([])
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    axios.get(`${Backend_Url}/api/v1/blog/bulk`,{
          headers:{
            'Authorization':'Bearer '+localStorage.getItem("token"),
          },
        },)
        .then((resp) => {
          console.log('Response:', resp.data);
          setBlogs(resp.data.res);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error:', err);
          
        });
    
  },[])
  return (
    {
      blogs, loading
    }
  )
}
