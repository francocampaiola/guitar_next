import React from 'react';
import { formatearFecha } from '../helpers'
import Link from 'next/link'
import Image from 'next/image'

const Entrada = ({entrada}) => {
    const {titulo, resumen, imagen, published_at, id } = entrada;

  return (
    <article>
        <Image
            src={imagen.url}
            alt={`imagen blog ${titulo}`}
            width={800}
            height={600}
            layout='responsive'
        />
        <div>
            <h1>{titulo}</h1>
            <p>{formatearFecha(published_at)}</p>
            <p>{resumen}</p>
            <Link href={`/blog/${id}`}>
                Leer entrada
            </Link>
        </div>
    </article>
  );
};

export default Entrada;
