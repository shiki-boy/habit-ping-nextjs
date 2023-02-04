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

  return (
    <QueryClientProvider client={ queryClient }>
      <div className={ monteserrat.variable }>
        <Component { ...pageProps } />
      </div>
    </QueryClientProvider>
  )
}
