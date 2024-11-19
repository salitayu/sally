import { AppProps } from 'next/app'
import '../styles/globals.scss'

interface CustomPageProps {

}

export default function MyApp({ Component, pageProps }: AppProps<CustomPageProps>) {
   return <Component {...pageProps} />
}
