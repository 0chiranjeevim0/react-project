import * as Yup from 'yup'


const loginSchema = Yup.object().shape({
    email:Yup.string().email().required('Required'),
    password:Yup.string().min(5,"Password is too short").required('Required'),
    name:Yup.string().max(20,"Name is too long").required('Required'),
    number:Yup.string().max(10,"Enter a valid phone number").required('Required'),


})

export default loginSchema;

