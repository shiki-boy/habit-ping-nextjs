import { useFormContext } from 'react-hook-form'

import classes from './login.module.scss'

import InputField from '@/components/Forms/Helpers/InputField'
import Button from '@/components/Button'

const LoginForm = ( {
  isLoading,
  goToForgotPassword = () => {},
  goToSignUp = () => {},
} ) => {
  const { register, formState } = useFormContext()

  return (
    <div className={ classes.loginForm }>
      <InputField name='email'>
        <input
          type='text'
          required
          { ...register( 'email', { required: 'This field is required' } ) }
        />
      </InputField>

      <InputField name='password'>
        <input
          required
          type='password'
          { ...register( 'password', { required: 'This field is required' } ) }
        />
      </InputField>

      <Button
        title='Sign In'
        color='primary'
        type='submit'
        isLoading={ isLoading }
        loadingText='Signing in...'
      />

      <Button
        title='Forgot Password?'
        color='tertiary'
        type='button'
        onClick={ goToForgotPassword }
      />

      <Button
        title='Create an account'
        color='tertiary'
        type='button'
        onClick={ goToSignUp }
      />
    </div>
  )
}

export default LoginForm
