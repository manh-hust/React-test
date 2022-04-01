import { useState, useEffect } from "react"
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from "react-router-dom"

function Products() {

    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(true)
    const [active, setActive] = useState('all')
    let componentMounted = true

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
            }

            return () => {
                componentMounted = false
            }
        }

        getProducts()
    }, [])


    const Loading = () => {

        return (
            <>
               <div className="col-md-3">
                   <Skeleton height={350}/>
               </div>
               <div className="col-md-3">
                   <Skeleton height={350}/>
               </div> 
               <div className="col-md-3">
                   <Skeleton height={350}/>
               </div>
               <div className="col-md-3">
                   <Skeleton height={350}/>
               </div>
            </>
        )
    }

    const filterProduct = (cat) => {
        const updateList = data.filter((x) => x.category === cat)
        setFilter(updateList)
        setActive(cat)
    }


    const ShowProducts = () => {

        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2"
                    onClick={() => setFilter(data)}> 
                        All 
                    </button>
                    <button className="btn btn-outline-dark me-2"
                    onClick={() => filterProduct("men's clothing")}    > 
                        Men's Clothing 
                    </button>
                    <button className="btn btn-outline-dark me-2"
                    onClick={() => filterProduct("women's clothing")}    > 
                        Women's Clothing 
                    </button>
                    <button className="btn btn-outline-dark me-2"
                    onClick={() => filterProduct("jewelery")}    > 
                        Jewelery Clothing 
                    </button>
                    <button className="btn btn-outline-dark me-2"
                    onClick={() => filterProduct("electronics")}    > 
                        Electronic Clothing 
                    </button>
                </div>
                {filter.map((item) => {
                    return (
                        <div className="col-xl-3 col-md-4 col-sm-6 mb-4">
                            <div class="card h-100 text-center p-4" key={item.id} >
                                <img src={item.image} class="card-img-top" alt={item.title} height="250px"/>
                                    <div class="card-body">
                                        <h5 class="card-title mb-0">{item.title.substring(0, 12)}...</h5>
                                        <p class="card-text lead fw-bold">${item.price}</p>
                                        <Link to={`/products/${item.id}`} class="btn btn-outline-dark">Buy now</Link>
                                    </div>
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }

    return (
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className="display-6 fw-bolder text-center">Products</h1>
                    <hr />
                </div>
            </div>
            <div className="row justify-content-center">
                {loading ? <Loading /> : <ShowProducts/>}
            </div>
        </div>
    )
}

export default Products