import Header from '../components/Header'
import Footer from '../components/Footer'
import Tienda from '../pages/tienda';

const Layout = ({children, pagina}) => {
  return (
      <div>
          <head>
              <title>GuitarLA - {pagina}</title>
              <meta name="description" content="Sitio web de venta de guitarras" />
          </head>
          <Header />
          {children}
          <Footer />
      </div>
  );
};

export default Layout;
