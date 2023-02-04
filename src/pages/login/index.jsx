import Form from '@/components/Forms/Form'
import AuthLayout from '@/layouts/AuthLayout'
import { loginUrl } from '@/routes'

import LoginForm from './LoginForm'

const Login = () => {
  const onSuccess = () => {}

  return(
    <Form
      method='post'
      endpoint={ loginUrl }
      onSuccess={ onSuccess }
      showOnlyToastErrors={ true }
      FormBody={ ( props ) =>
        LoginForm( { ...props } )
      }
    />
  )
}

Login.getLayout = function getLayout( page ) {
  return (
    <AuthLayout>
      {page}
    </AuthLayout>
  )
}

export default Login
