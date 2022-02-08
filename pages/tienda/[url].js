import Layout from '../../components/Layout';
import Image from 'next/image';
import styles from '../../styles/Producto.module.css'

const Producto = ({guitarra}) => {

  const {nombre, descripcion, imagen, precio, url} = guitarra[0];

  return (
    <Layout
      pagina={`${nombre}`}
    >
        <main className='contenedor'>
        <div className={styles.guitarra}>
            <div className=''>
                <Image
                        priority='true'
                        src={imagen.url}
                        alt={`imagen tienda ${nombre}`}
                        width={400}
                        height={800}
                        layout='responsive'
                />
            </div>
            <div className={styles.contenido}>
                <h3 className={styles.nombre}>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <h6 className={styles.precio}>${precio}</h6>

                <form className={styles.formulario}>
                    <label>Cantidad: </label>
                    <select>
                        <option value="">-- Seleccione la cantidad --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </select>
                    <input
                        type='submit'
                        value='Agregar al carrito'
                    />
                </form>
            </div>
        </div>
        </main>
    </Layout>
  );
};

// export async function getStaticPaths() {
//   const url = `${process.env.API_URL}/guitarras`
//   const respuesta = await fetch(url)
//   const guitarras = await respuesta.json()

//   const paths = guitarras.map(guitarra => ({
//       params: { url: guitarra.url }
//   }))

//   return {
//       paths,
//       fallback: false
//   }
// }

// export async function getStaticProps({params: { url }}) {
//   const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`
//   const respuesta = await fetch(urlGuitarra);
//   const guitarra = await respuesta.json();
  
//   return {
//       props: {
//           guitarra: guitarra[0]
//       }
//   }
// }

export async function getServerSideProps({query: { url }}) {
    
    const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`
    const respuesta = await fetch(urlGuitarra);
    const guitarra = await respuesta.json();
    
    return {
        props: {
            guitarra
        }
    }
}

export default Producto;
