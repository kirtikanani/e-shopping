import Document, { Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
        <meta charSet="UTF-8" />
            <meta http-Equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Online Shopping</title>

            <link rel="stylesheet" href="./css/bootstrap.min.css" />
            
            <link rel="stylesheet" href="./css/aos.css" />
            <link rel="stylesheet" href="./css/owl.carousel.css" />
            
            <link rel="stylesheet" href="./css/all.min.css" />

            <link rel="stylesheet" href="./css/animate.css" />

            <link rel="stylesheet" href="./css/style.css" />
            <link rel="stylesheet" href="./css/media.css" />

            <link rel="shortcut icon" href="./images/main_logo.png" type="image/x-icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="./js/bootstrap.bundle.min.js"></script>
            <script src="./js/jquery-3.2.1.min.js"></script>

            {/* <script>
                $(document).ready(function () {
                    $('.zoom').zoom()
                });
            </script> */}

            {/* <script>
                $(function() {  $("#like_exampleModal").modal('show') });
                </script> */}
            
            <script src="./js/owl.carousel.js"></script>
            <script src="./js/jquery.zoom.min.js"></script>
            <script src="./js/jquery.zoom.js"></script>

            <script src="./js/wow.min.js"></script>

            <script>{`
  (function() {
    var info = console.info
    console.info = function (message) {
      if (!/Download the React DevTools/.test(message)) info.apply(console, arguments) 
    }
  })()
`}</script>

            <script src="./js/custom.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument