export default function MyApp({ Component, pageProps }:any) {
    console.log(Component,'Component');
    return (
      <div>
        123
        <Component {...pageProps} />
      </div>
    )
  }