import { useContext, useState } from "react"
import { LoginContext } from "../../context/LoginContext"

const LoginScreen = () => {

    const {LoginScreen, user} = useContext(LoginContext)
    console.log(user);
    
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePassChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        login({
            email,pass
        })
    }

    return(
        <div style={{backgroundColor: 'bisque'}}>
            <form onSubmit={handleSubmit} className="container py-5">
                <input
                    type={'email'}
                    className="form-control my-2"
                    value={email}
                    onChange={handleEmailChange}
                />

                <input
                    type={'password'}
                    className='form-control my-2'
                    value={pass}
                    onChange={handlePassChange}
                />

                {
                    user.error && <small className="alert">{user.error}</small>
                }
                {/* {
                    user.error 
                    ? <small className="alert">{user.error}</small>
                    : null
                } */}

                <button className="btn btn-primary" type="submit">Ingresar</button>
            </form>
        </div>
    )

}