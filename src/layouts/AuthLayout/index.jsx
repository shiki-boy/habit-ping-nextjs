import Image from 'next/image'

import classes from './AuthLayout.module.scss'

const AuthLayout = ( { children } ) => (
  <main className={ classes.authContainer }>
    <Image
      className={ classes.logo }
      src='/logo.svg'
      alt='logo'
      width={ 100 }
      height={ 60 }
      priority
    />

    {children}
  </main>
)

export default AuthLayout
