import React, { useState } from 'react';
import { 
  Palette, Search, Upload, Gavel, Calendar, User, Menu, X, 
  ArrowRight, Sparkles, Heart, MessageCircle, Share2, ShieldCheck, 
  Clock, TrendingUp, Mail, MapPin, Phone, Github, Twitter, Instagram,
  Layers, Zap, Coins, History, BarChart3, Globe
} from 'lucide-react';
function Register(){
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [pass1,setPass1] = useState("");
  const [pass2,setPass2] = useState("")
  
return(
    <div className='w-screen h-screen bg-purple-500'>
      <div className='pt-20 flex items-center w-screen h-full justify-center'>
        <div className='grid bg-pink-300 p-2.5 rounded-2xl'>
          <label className='text-center text-3xl'> Register</label>
          <input type="text" onChange={(e)=>{setName(e.target.value)}} name="name" className='bg-blue-300 border-2 w-md h-15 my-4 rounded-2xl p-4 text-3xl text-center'  placeholder='Name'/>
          <input type="email" onChange={(e)=>{setEmail(e.target.value)}} name="email" className='bg-blue-300 border-2 w-md h-15 my-4 rounded-2xl p-4 text-3xl text-center' placeholder='Email'/>
          <input type="password" onChange={(e)=>{setPass1(e.target.value)}} name="pass" className='bg-blue-300 border-2 w-md h-15 my-4 rounded-2xl p-4 text-3xl text-center' placeholder='Password'/>
          <input type="password" onChange={(e)=>{setPass2(e.target.value)}} name="pass2" className='bg-blue-300 border-2 w-md h-15 my-4 rounded-2xl p-4 text-3xl text-center' placeholder='Retype Password'/>
          <button className='bg-red-400 hover:bg-red-500 duration-400 border-0 w-md h-15 my-4 rounded-2xl text-3xl text-center'>Submit</button >
          <label className=' text-xl text-center' > Other Options</label> 
          <div>
          <center>
          <button  style={{
            width:40,
            height:40,
          }} onClick={()=>{
            alert(name);
          }} >
            <img src="resources/search.png" alt="" style={{
              backgroundColor:"white",
              borderRadius:50,
              padding:4
            }}/>
          </button>
          </center>
          </div>
        </div>
        <div className='grid bg-purple-500 p-25 rounded-2xl'></div>
        <div className='grid bg-pink-300 p-2.5 rounded-2xl'>
          <label className='text-center text-3xl'> Login</label>
          <input type="email" onChange={(e)=>{setEmail(e.target.value)}} name="email" className='bg-blue-300 border-2 w-md h-15 my-4 rounded-2xl p-4 text-3xl text-center' placeholder='Email'/>
          <input type="password" onChange={(e)=>{setPass1(e.target.value)}} name="pass" className='bg-blue-300 border-2 w-md h-15 my-4 rounded-2xl p-4 text-3xl text-center' placeholder='Password'/>
          <button className='bg-red-400 hover:bg-red-500 duration-400 border-0 w-md h-15 my-4 rounded-2xl text-3xl text-center'>Submit</button >
          <label className=' text-xl text-center' > Other Options</label> 
          <div>
          <center>
          <button  style={{
            width:40,
            height:40,
          }} onClick={()=>{
            alert(name);
          }} >
            <img src="resources/search.png" alt="" style={{
              backgroundColor:"white",
              borderRadius:50,
              padding:4
            }}/>
          </button>
          </center>
          </div>
        </div>
      </div>      
        
    </div>
)
}
export default Register