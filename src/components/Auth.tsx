import React, { ChangeEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SignupInput } from '@rishu_1702/common'
import axios from 'axios'
import {Backend_Url} from '../config'
import { useAtom } from 'jotai'
import { nameatom } from '../store/atoms/name'
export const Auth = ({Prakar}:{Prakar : "signup"|"signin"}) => {
  const [naam,setnaam]=useAtom(nameatom);
  const [authobject,setAuthobject]=useState<SignupInput>({
    name :"",
    email:"",
    password:""
  });
  const nav=useNavigate()
  async function onclick(){
    try{
    const res= await axios.post(
      `${Backend_Url}/api/v1/user/${Prakar}`,
        //body
        authobject
    );
    setnaam(res.data.name)
    console.log(res.data.jwt_token)
    localStorage.setItem("token",res.data.jwt_token);
    nav('/blogs')
    }catch(e){
      console.log("Wrong Credentials")
    }
  }
  
  return (
    
    <div>
      {/* {JSON.stringify(authobject)} */}
        <div className='h-screen flex flex-col justify-center items-center roboto-custom'>
                <div className="w-1/2 flex flex-col">
                    
                    <div className='font-bold text-2xl text-center'>{Prakar=="signup"?"Create an account" : "Login to your account"}</div>
                    <div className='text-slate-400'>
                    <div className='font-normal text-sm text-center '>{Prakar=="signup"?"Already have an account?" : "Don't have an account?"}
                    <Link to={Prakar=="signup"?"/signin" : "/signup"} className='underline underline-offset-0 ml-2'>{Prakar=="signup"?"Sign In" : "Sign Up"}</Link></div>
                    </div>
                    <div className='flex flex-col gap-2 my-5'>
                    {Prakar=="signup"?<LabelledInput type="text" title="Name" placeholder="Rishu" likhnepe={
                      function(e){
                        setAuthobject({
                          ...authobject,
                          name:e.target.value
                        }) //curly braces as its an object
                        
                      }
                    }/>:null}
                    <LabelledInput type="email" title="Email" placeholder="rishuraj1702@gmail.com" likhnepe={
                      function(e){
                        setAuthobject({
                          ...authobject,
                          email:e.target.value
                        }) //curly braces as its an object
                      }
                    }/>
                    <LabelledInput type="password" title="Password" placeholder="12345" likhnepe={
                      function(e){
                        setAuthobject({
                          ...authobject,
                          password:e.target.value
                        }) //curly braces as its an object
                      }
                    }/>
                    </div>
                    <button onClick={onclick} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 w-full font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{Prakar=="signup"?"Sign Up" : "Sign In"}</button>
                </div>
        </div>
    </div>
  )
}
interface labelinput{
  title:string,
  placeholder:string,
  likhnepe:(e:ChangeEvent<HTMLInputElement>)=>void
  type?:string
}
function LabelledInput({title,placeholder,likhnepe,type}:labelinput){
  return <div>
     <div >
        <label className="block mb-2 text-sm font-medium text-gray-900">{title}</label>
        <input onChange={likhnepe} type={type||"text"}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required />
    </div> 
  </div>
}
