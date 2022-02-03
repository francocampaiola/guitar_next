import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/NoEncontrado.module.css"

const NoEncontrado = () => {
  return (
    <Layout>
        <div className={styles.no_encontrado}>
            <h1 className="heading">Página no encontrada</h1>
            <Link href="/">Volver a la página principal</Link>
        </div>
    </Layout>
  );
};

export default NoEncontrado;
