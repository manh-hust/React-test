import {useSelector} from "react-redux"

function Cart () {

    const cart = useSelector(state => state.handleCart)

    const handleButton = () => {
        return 0
    }

    return (
        <div className="container mt-5">
            <div className="row gy-5">
                {cart.map(product => (
                    <>  
                        <div className="col-md-4 offset-md-2">
                            <img src={product.image} alt={product.title}
                            height="200px" width="180px"/>
                        </div>
                        <div className="col-md-5 offset-md-1">
                            <h3>{product.title}</h3>
                            <p className="lead fw-bold">
                                {product.qty} x ${product.price} = $
                                {product.qty * product.price}
                            </p>
                            <button className="btn btn-outline-dark me-4"
                            onClick={() => handleButton(product)} >
                                <i className="fa fa-minus"></i>
                            </button>
                            <button className="btn btn-outline-dark me-4"
                            onClick={() => handleButton(product)} >
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                        <div className="border-bottom"></div>
                    </>
                ))}
            </div>
        </div>
    )
}

export default Cart