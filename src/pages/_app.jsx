import { Montserrat } from '@next/font/google'

import '@/theme/index.scss'
import { QueryClient, QueryClientProvider } from 'react-query'

// eslint-disable-next-line
const monteserrat = Montserrat({
  subsets: [ 'latin' ],
  variable: '--primary-font',
} )

export default function App( { Component, pageProps } ) {
  const queryClient = new QueryClient( { defaultOptions: { queries: { refetchOnWindowFocus: false } } } )

  const getLayout = Component.getLayout || ( ( page ) => page )

  return (
    <QueryClientProvider client={ queryClient }>
      <div className={ monteserrat.variable }>
        {getLayout( <Component { ...pageProps } /> )}
      </div>
    </QueryClientProvider>
  )
}
