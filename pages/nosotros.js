import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
    return (
        <div>
            <Layout
                pagina="Nosotros"
            >
                <div className='contenedor'>
                    <h2 className='heading'>Nosotros</h2>
                        <div className={styles.contenido}>    
                            <Image 
                                src="/img/nosotros.jpg"
                                width={600}
                                height={450}
                                layout="responsive"
                                alt="Foto de sitio de nosotros"
                            />
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin leo ac turpis cursus rhoncus. Fusce efficitur risus ut molestie eleifend. Proin aliquam quis augue eu tristique. Nullam mattis nisl nec nunc tempus mattis. Aliquam sagittis dolor nisi, at elementum odio commodo eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce eget elit ut elit ultricies tincidunt. Quisque at urna erat. Aenean tempor arcu eget dolor iaculis porta. Etiam pretium sapien at turpis efficitur, quis convallis leo imperdiet.</p>
                                
                                <p>Suspendisse nec ligula quis lacus elementum tempor. Aenean vel convallis sem. Suspendisse in libero ullamcorper, aliquam quam in, luctus diam. Cras ultricies velit sed leo consectetur, at efficitur erat lobortis. Vestibulum eu lacus ornare, semper nibh a, tempus ligula. Aenean sit amet tellus sed tortor mattis interdum sed in erat. Sed ultrices gravida ipsum vel vestibulum. Nam aliquam porta condimentum. Cras et augue dapibus, condimentum eros quis, dignissim elit. Pellentesque ante elit, pretium vitae velit sed, malesuada rutrum dui.</p>
                            </div>
                        </div>
                </div>
            </Layout>
        </div>
    )
};

export default Nosotros