import '../styles/index.css'
import '../styles/style.css'
const Carrito = () => {

	const productos = [
        { id: 1, nombre: 'IPA', precio: 25, imagen: 'https://i.postimg.cc/vH95krmc/IPA-nobg.png' },
        { id: 2, nombre: 'Porter', precio: 20, imagen: 'https://i.postimg.cc/5yKKrw9P/Porter-nobg.png' },
		{ id: 3, nombre: 'Maracuyá Amber Ale', precio: 22, imagen: 'https://i.postimg.cc/d14578Cq/Amber-Ale-nobg.png'},
		{ id: 4, nombre: 'Weissbier', precio: 28, imagen: 'https://i.postimg.cc/bJCRYqXr/Weissbier-nobg.png'},

       
    ];
	return ( 

	<div>
	<div className="header-carrito">
        <h1 className="title">Carrito de Compras</h1>

        <div className="container-icon">
            {/* SVG del icono del carrito */}
            <div className="count-products">
                <span id="contador-productos">0</span>
            </div>
        </div>
    </div>
		<div className="container-items">
                {productos.map(producto => (
                    <div className="item" key={producto.id}>
                        <figure>
                            <img className="img-carrito" src={producto.imagen} alt={producto.nombre} />
                        </figure>
                        <div className="info-product">
                            <h2>{producto.nombre}</h2>
                            <p className="price">${producto.precio}</p>
                            <button className="btn-add-cart">Añadir al carrito</button>
                        </div>
                    </div>
                ))}
            </div>
	</div>
 );
}
 
export default Carrito;