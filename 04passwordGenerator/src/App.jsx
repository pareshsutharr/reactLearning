import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [password, setpassword] = useState(Generator());
  const [range , setrange] = useState(8);

  function handleRangeChange(event){
    setrange(event.target.value);
  }

  function Generator(range){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password = '';
    for (let i = 0; i < range; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
  }

  useEffect(()=>{
    Generator();
  },[range,password,Generator(range)])

  function copypass() {
    navigator.clipboard.writeText(password).then(() => {
      alert('Password copied to clipboard');
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  }

  useEffect(()=>{
      console.log('useEffect used');
      return () => {
        console.log('Cleanup');
      }
  })

  return (
    <>
    <h1>Password Generator</h1>
    <input type="text" name="" id="" readOnly placeholder='getpassword' style={{padding:10,fontSize:20}} value={password}/>
     <button style={{background:'green', textDecorationColor:'white',padding:10,borderRadius:'none'}} onClick={copypass}>Copy</button><br/>
    8<input type="range" style={{cursor:'pointer'}} min={8} max={20} onChange={handleRangeChange}  />20
    <p>{range}</p>
     <br/>
     <br/>
     <button onClick={()=>setpassword(Generator(range))}>Generate New Password</button>
     </>
  )
}

export default App
