import {Link} from 'react-router-dom'

function Home() {

    return (
        <>
            <div> 
                <Link to="/register">Registrarme</Link>
            </div>

            <div>
                <Link to="/login">Ingresar</Link>
            </div>

            <div>
                <Link to="/product/create">Crear producto</Link>
            </div>

            <div>
                <Link to="/products">Ver productos</Link>
            </div>

            <div>
                <Link to="/category/create">Crear categoría</Link>
            </div>

            <div>
                <Link to="/categories">Ver categorías</Link>
            </div>
            <div>
                <Link to="/brand/create">Crear marca</Link>
            </div>

            <div>
                <Link to="/brands">Ver marcas</Link>
            </div>

            
        </>
    )
}


export default Home