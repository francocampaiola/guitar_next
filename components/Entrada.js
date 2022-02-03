import React from 'react';
import { formatearFecha } from '../helpers'
import Link from 'next/link'

const Entrada = ({entrada}) => {
    const {titulo, resumen, imagen, published_at, id } = entrada;

  return (
    <article>
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
