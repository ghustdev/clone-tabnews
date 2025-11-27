// Analytics da Vercel
import { Analytics } from "@vercel/analytics/next";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />

      <h1>Analytics ca Vercel</h1>
    </>
  );
}

export default MyApp;