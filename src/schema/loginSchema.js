import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
    
    email:Yup.string().email().required('Required'),
    password:Yup.string().min(8,"Password is too short").required('Required')
    .matches(/[0-9]/,'Password Requires a number')
    .matches(/[a-z]/,'Password requires lowercase')
    .matches(/[A_Z]/,'Password requires an uppercase')
    .matches(/[^\w]/,'Password requires a symbol'),
    name:Yup.string().max(20,"Name is too long").required('Required'),
    number:Yup.string().max(10,"Enter a valid phone number").required('Required'),


})

export default loginSchema;

