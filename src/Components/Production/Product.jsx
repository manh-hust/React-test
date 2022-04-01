import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux"
import { addCart } from "../../redux/action"

function Product () {

    const {id} = useParams()
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispath = useDispatch()
    
    const addProduct = (product) => {
        dispath(addCart(product))
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }

        getProduct()
    }, [])

    const Loading = () => {
        return(
            <>
                <div className="col-md-6">
                    <Skeleton height={400}/>
                </div>
                <div className="col-md-6">
                    <Skeleton height={50} width={200}/>
                    <Skeleton height={100} />
                    <Skeleton height={25} width={150}/>
                    <Skeleton height={50} width={150}/>
                    <Skeleton height={200} />
                    <Skeleton height={50} width={300}/>

                </div>
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
            <div className="col-md-6">
                <img src={product.image} alt={product.title}
                height="400px" width="400px"
                />
            </div>
            <div className="col-md-6">
                <h4 className="text-uppercase text-black-50">
                    {product.category}
                </h4>
                <h1 className="display-5">{product.title}</h1>
                <p className="lead fw-bolder">
                    Rating {product.rating && product.rating.rate}
                    <i className="fa fa-star"></i> 
                </p>
                <h3 className="display-6 fw-bold my-4">
                    $ {product.price}
                </h3>
                <p className="lead">{product.description}</p>
                <button className="btn btn-outline-dark px-4 py-2"
                onClick={() => addProduct(product)}
                >
                    Add to cart
                </button>
                <Link to="/cart" className="btn btn-dark ms-2 px-3">
                    Go to cart
                </Link>
            </div>
            </>
        )
    }


    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    {loading ? <Loading/> : <ShowProduct/>}
                </div>
            </div>            
        </div>
    )
}

export default Product