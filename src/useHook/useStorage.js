import {storage} from "../firebase.config"
import { ref, uploadBytesResumable } from "firebase/storage"
import { useState, useEffect } from "react"

const useStorage = (file)=>{
    const [url,setURL] = useState("")
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState("")
    useEffect(()=>{
        console.log("get change")

    },[file])


}

export default useStorage