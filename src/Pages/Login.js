import { useNavigate } from "react-router-dom"
import { userLogin } from "../Services/userApi"
import { UserContext } from "../Providers/UserContext"
import { useCallback, useContext, useEffect, useRef } from "react"

export default function Login() {
    const userNameInput = useRef()
    const { setUserToken } = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(()=>{
        userNameInput.current.focus()
    }, [userNameInput])

    const loginHandler = useCallback(async (event) => {
        event.preventDefault()

        const { username, password } = Object.fromEntries(new FormData(event.target))

        if(username && password){
            const user = await userLogin(username, password)
            if(user){
                setUserToken(user.token)
                navigate('/')
            }
        }

        userNameInput.current.value = ""
    }, [setUserToken, navigate, userNameInput])

    return (
        <form onSubmit={loginHandler}>
            <label htmlFor="username">Username: </label>
            <input type="text" id="username" name="username" ref={userNameInput}/>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" name="password"/>

            <input type="submit" value="Login"/>
        </form>
    )
}