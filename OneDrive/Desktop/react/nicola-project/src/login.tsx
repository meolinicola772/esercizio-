import {useState} from 'react'
 
export function Login({onLogin}){
  const [data,setData]= useState({
username: '',
password:'',
remember: false,

}) 

function handleChange(event){

    setData((prev)=> ({...prev,  [event.target.name]:event.target.type === 'checkbox'? event.target.checked : event.target.value})) 


}

function tastoLogin(){
  onLogin(data)


}

function reset(){
  setData({
    username: '',
    password: '',
    remember: false,
  });
}



  return(
<div>
   <input type="text" name='username' value={data.username}  onChange={handleChange} placeholder="nome"></input>
      <input type="text" name='password' value={data.password}  onChange={handleChange} placeholder="password"></input>
         <input type="checkbox" name='remember' onChange={handleChange} checked={data.remember} ></input>
         <button name="login" disabled={data.username === '' || data.password === ''} onClick={tastoLogin} >Login</button>
         <button onClick={reset}>Reset</button>

  </div>
)

}