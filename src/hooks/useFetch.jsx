import { useState,useEffect } from 'react';
const useFetch = (url) => {
    const [data,setData]=useState(null);
    const [ispending,setpending]=useState(true);
    const [error,setError]=useState(null);
    
    useEffect(()=>{
        const abortCont=new AbortController();
        setTimeout(() => {
            fetch(url,{signal:abortCont.signal}).then((resp)=>{
                if(!resp.ok){
                    throw Error("could not fetch the data for that resource")
                }
                return resp.json();
            }).then((data)=>{
                setData(data);
                setpending(false)
                setError(null)
            }).catch((err)=>{
                if(err.name==='AbortError'){
                    console.log('fetch aborted')
                }else{
                    setpending(false)
                setError(err.message);
                }
                
            })
            return ()=>abortCont.abort()
        }, 1000);
        
      },[url])
    return {data,ispending,error};
}

export default useFetch