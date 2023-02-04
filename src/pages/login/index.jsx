import Form from '@/components/Forms/Form'
import { loginUrl } from '@/routes'
import Image from 'next/image'

import classes from './login.module.scss'
import LoginForm from './LoginForm'

const Login = () => {
  const onSuccess = () => {}

  return(
    <div className={ classes.loginContainer }>
      <Image className={ classes.logo } src='/logo.svg' alt='logo' width={ 100 } height={ 60 } priority/>

      <Form
        method='post'
        endpoint={ loginUrl }
        onSuccess={ onSuccess }
        showOnlyToastErrors={ true }
        FormBody={ ( props ) =>
          LoginForm( { ...props } )
        }
      />

    </div>
  )
}

export default Login
