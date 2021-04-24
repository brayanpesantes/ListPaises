import { useEffect, useState } from "react"
import { fechAllPaises } from "../helpers/fechAllPaises"

export const usePaises = () => {
    const [paises, setPaises] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setIsLoading(false)
        fechAllPaises().then(pais=>{
            setPaises(pais)
        })
    }, [])
    return {
        paises,
        isLoading,
    }
}
