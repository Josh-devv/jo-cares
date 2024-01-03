import { CartsProvider } from "@/components/CartsProvider";

function MyApp({ Component, pageProps }) {
    return (
      <CartsProvider>
        <Component {...pageProps} />
      </CartsProvider>
    );
  }
  
  export default MyApp;