import { useState, useEffect } from "react"
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

function Products() {

    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(true)

    let componentMounted = true

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log('Data: ',filter);
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
                    onClick={() => filterProduct("men's Clothing")}    > 
                        Men's Clothing 
                    </button>
                    <button className="btn btn-outline-dark me-2"
                    onClick={() => filterProduct("women's Clothing")}    > 
                        Women's Clothing 
                    </button>
                    <button className="btn btn-outline-dark me-2"
                    onClick={() => filterProduct("jewelery")}    > 
                        Jewelery Clothing 
                    </button>
                    <button className="btn btn-outline-dark me-2"
                    onClick={() => filterProduct("electronic")}    > 
                        Electronic Clothing 
                    </button>
                </div>
                {filter.map((item) => {
                    return (
                        <div className="col-md-3 mb-4">
                            <div class="card h-100 text-center p-4" key={item.id} >
                                <img src={item.image} class="card-img-top" alt={item.title} height="250px"/>
                                    <div class="card-body">
                                        <h5 class="card-title mb-0">{item.title.substring(0, 12)}...</h5>
                                        <p class="card-text lead fw-bold">${item.price}</p>
                                        <a href="#" class="btn btn-outline-dark">Go somewhere</a>
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
                    <h1 className="display-6 fw-bolder text-center">PRoducts</h1>
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