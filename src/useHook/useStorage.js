import {storage} from "../firebase.config"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { useState, useEffect } from "react"

const useStorage = (file)=>{
    const [url,setURL] = useState("")
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState("")

    useEffect(async()=>{
        console.log("get change")
        const imageRef = ref(storage,`images/${file.name}`) //storage + path penyimpanan file
        const uploadTask = uploadBytesResumable(imageRef,file) //imageRef and file

        uploadTask.on("state_changed",(snap)=>{
            setProgress(snap.bytesTransferred)
            if(snap.bytesTransferred==snap.totalBytes){
                getDownloadURL(uploadTask.snapshot.ref).then(url=>{
                    setURL(url)
                }).catch(err=>{
                    setError(err)
                })
            }
        })
    },[file])

    return{url,progress,error}

}

export default useStorage