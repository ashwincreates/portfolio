import '../styles/index.css';
import { ThemeProvider } from 'next-themes';

export default function MyApp({ Component, pageProps }) {
  return (
		<ThemeProvider attribute="class" enableSystem={false}>
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

