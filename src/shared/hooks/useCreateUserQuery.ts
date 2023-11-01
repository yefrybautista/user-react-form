import { useCallback } from "react"
import { RegisterUserData } from "../types"

export default function useCreateUserQuery(){
    const submitUserData = useCallback(async (data: RegisterUserData)=>{
        console.log('user created!', {data})
    },[]);
    
    return {
        submitUserData
    }
}