import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({children, pagina, guitarras}) => {
  return (
      <div>
          <div>
            <head>
                <title>GuitarLA - {pagina}</title>
                <meta name="description" content="Sitio web de venta de guitarras" />
                <link rel="preconnect" href='https://fonts.googleapis.com' />
                <link rel="preconnect" href='https://fonts.gstatic.com' crossOrigin />
                <link href='https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap' rel='stylesheet' />                
            </head>
          </div>
          <Header 
            guitarras={guitarras}
          />
          {children}
          <Footer />
      </div>
  );
};

Layout.defaultProps = {
  guitarra: null
}

export default Layout;
