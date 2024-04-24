import { useNavigate } from "react-router-dom"
import { userLogin } from "../Services/userApi"
import { UserContext } from "../Providers/UserContext"
import { useContext } from "react"

export default function Login() {
    const { setUserToken } = useContext(UserContext)
    const navigate = useNavigate()

    async function loginHandler(event) {
        event.preventDefault()

        const { username, password } = Object.fromEntries(new FormData(event.target))

        if(username && password){
            const user = await userLogin(username, password)
            if(user){
                setUserToken(user.token)
                navigate('/')
            }
        }
    }

    return (
        <form onSubmit={loginHandler}>
            <label htmlFor="username">Username: </label>
            <input type="text" id="username" name="username"/>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" name="password"/>

            <input type="submit" value="Login"/>
        </form>
    )
}