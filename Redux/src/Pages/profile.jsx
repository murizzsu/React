import { useLogin } from "../hooks/useLogin"

const Profile = () => {
    const username = useLogin()
    return (
        <div>
            <h1>Hello {username}</h1>
        </div>
    )
}

export default Profile