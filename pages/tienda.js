import Layout from '../components/Layout'
import Guitarra from '../components/Guitarra';
import styles from '../styles/Tienda.module.css'

const Tienda = ({guitarras}) => {
    return (
        <div>
            <Layout
                pagina="Tienda -"
            >
                <div className='contenedor'>
                    <div className={styles.tienda}>
                        {guitarras.map(guitarra => (
                            <Guitarra
                                key={guitarra.id}
                                guitarra={guitarra}
                            />
                        ))}
                    </div>
                </div>
            </Layout>
        </div>
    )
};

export async function getServerSideProps() {
    const url = `${process.env.API_URL}/guitarras?_sort=created_at:asc`
    const respuesta = await fetch(url);
    const guitarras = await respuesta.json();

    return {
        props: {
            guitarras
        }
    }
}

export default Tienda