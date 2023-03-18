import { Switch } from 'antd';
import React, { useState,useEffect } from 'react'
// import { CheckOutlined } from '@ant-design/icons';

function useTheme() {
    const [mode,setMode] = useState(()=>localStorage.getItem("mode"))

    useEffect(()=>{
        window.addEventListener("storage",SetPreferedTheme);
        return()=>{
            window.removeEventListener("storage",SetPreferedTheme)
        }
    },[])
    const SetPreferedTheme=()=>{
        const _mode = localStorage.getItem("mode");
        if(_mode){
            setMode(_mode);
        }else{
            setMode("light")
        }
    }

    useEffect(()=>{
        if(mode==="dark"){
            document.body.classList.add("dark-mode");
            localStorage.setItem("mode","dark")
        }else{
            document.body.classList.remove("dark-mode");
            localStorage.setItem("mode","light")
        }
    },[mode])


  return (
    <Switch onClick={()=>setMode(mode=>(mode ==="dark" ? "light" :"dark"))}       checkedChildren={"light"}
    unCheckedChildren="dark"
    defaultChecked/>
 
  )
}

export default useTheme