import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Signika } from 'next/font/google';

const signika = Signika({
  subsets: ['latin'],
  variable: '--font-signika',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${signika.variable} font-signika text-spotify-black selection:bg-white selection:text-spotify-black`}
    >
      <Component {...pageProps} />
    </div>
  );
}
