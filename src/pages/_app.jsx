import { Montserrat } from '@next/font/google'

import '@/theme/index.scss'

// eslint-disable-next-line
const monteserrat = Montserrat( {
  subsets: [ 'latin' ],
  variable: '--primary-font',
} )

export default function App( { Component, pageProps } ) {
  return (
    <div className={ monteserrat.variable }>
      <Component { ...pageProps } />
    </div>
  )
}
