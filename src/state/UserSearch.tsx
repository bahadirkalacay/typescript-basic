import { useEffect, useRef, useState } from "react"



const users = [
    {name:"Bahadir", age:20},
    {name:"Berat", age:17},
    {name:"İpek",age:25}
]

const UserSearch : React.FC = ()=>{
    const [name,setName] = useState("")
    const [user,setUser] = useState<{name:string,age:number} | undefined>()
    const inputRef = useRef<HTMLInputElement | null>(null)


    useEffect(()=>{
        if(!inputRef.current){
            return
        }
        inputRef.current.focus()
    },[])

    const onClick = () => {
        const foundUser = users.find((user)=>{
            return user.name === name;
        })
        setUser(foundUser)
    }
    return(
        <div>
            <input ref={inputRef} value={name} onChange={(e)=>{setName(e.target.value)}} />
            <button onClick={onClick}>Find User</button>
            <div>
                {user && user.name}
                {user && user.age}
            </div>
        </div>
    )
}

export default UserSearch