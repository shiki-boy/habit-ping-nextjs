import Image from 'next/image'

import classes from './login.module.scss'

const Login = () => (
  <div className={ classes.loginContainer }>
    <Image className={ classes.logo } src='/logo.svg' alt='logo' fill priority/>
  </div>
)

export default Login
