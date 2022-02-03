import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Guitarra.module.css';

const Guitarra = ({guitarra}) => {

    const {nombre, descripcion, imagen, precio, id, url} = guitarra;

  return (
        <div className={styles.producto}>
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
                <Link href={`/tienda/${url}`}>
                    <a className={styles.enlace}>
                        Ver producto
                    </a>
                </Link>
            </div>
        </div>
  );
};

export default Guitarra;
