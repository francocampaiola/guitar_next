import Header from '../components/Header'
import Footer from '../components/Footer'
import Tienda from '../pages/tienda';

const Layout = ({children, pagina}) => {
  return (
      <div>
          <div>
            <head>
                <title>GuitarLA - {pagina}</title>
                <meta name="description" content="Sitio web de venta de guitarras" />
            </head>
          </div>
          <Header />
          {children}
          <Footer />
      </div>
  );
};

export default Layout;
