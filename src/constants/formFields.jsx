const signupFields = [
    {
        labelText:"Username",
        labelFor:"username",
        id:"username",
        name:"username",
        type:"text",
        autoComplete:"username",
        isRequired:true,
        placeholder:"Enter a Username"   
    },
    {
        labelText:"First Name",
        labelFor:"first_name",
        id:"first_name",
        name:"first_name",
        type:"text",
        autoComplete:"first_name",
        isRequired:false,
        placeholder:"Enter your First Name"   
    },
    {
        labelText:"Last Name",
        labelFor:"last_name",
        id:"last_name",
        name:"last_name",
        type:"text",
        autoComplete:"last_name",
        isRequired:false,
        placeholder:"Enter your Last Name"   
    },
    {
        labelText:"Email Id",
        labelFor:"email",
        id:"email",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:false,
        placeholder:"Enter your Email address"   
    },
    {
        labelText:"Contact No.",
        labelFor:"contact",
        id:"contact",
        name:"email",
        type:"text",
        autoComplete:"contact",
        isRequired:false,
        placeholder:"Enter your Contact No."   
    },
    {
        labelText:"Role",
        labelFor:"user_role",
        id:"user_role",
        name:"user_role",
        type:"text",
        autoComplete:"user_role",
        isRequired:true,
        placeholder:"Select your role from the dropdown"   
    },
    {
        labelText:"Institution",
        labelFor:"institution",
        id:"institution",
        name:"institution",
        type:"text",
        autoComplete:"contact",
        isRequired:false,
        placeholder:"Enter your Institution"   
    },
    {
        labelText:"Password",
        labelFor:"password1",
        id:"password1",
        name:"password1",
        type:"password",
        autoComplete:"passsword",
        isRequired:true,
        placeholder:"Choose a Password"   
    },
    {
        labelText:"Confirm Password",
        labelFor:"password2",
        id:"password2",
        name:"password2",
        type:"password",
        autoComplete:"passsword",
        isRequired:true,
        placeholder:"Confirm Password"   
    }
]

const loginFields=[
    {
        labelText:"Username",
        labelFor:"username",
        id:"username",
        name:"username",
        type:"text",
        autoComplete:"username",
        isRequired:true,
        placeholder:"Enter your Username"   
    },
    {
        labelText:"Password",
        labelFor:"password1",
        id:"password1",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Enter your Password"   
    }
]

export {loginFields, signupFields}