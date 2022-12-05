import Header from "../components/Header"
import Signup from "../components/SignUp"

export default function LoginPage(){
    return(
        <>
             <Header
                heading="Sign Up"
                paragraph="Already have an account?"
                linkName="Login"
                linkUrl="/login"
                />
            <Signup/>
        </>
    )
}