import {useState, useEffect} from 'react'


function Products() {
    
    // let [data, setData] = useState([])

    let [products, setProducts] = useState([
        {
            _id : null,
            title : null
        }
    ])
    
 
    
    useEffect(function () {

        fetch('http://localhost:4001/api/products')
        .then(response => response.json())
        .then(products => setProducts(products))
        .catch(err => {
            console.log(err)          
        })
    }, [])
    

    return (
   
        <div>
        <p>Lista de productos:</p>
        
            {
                products.map(function (product) {
                        return <div key={product._id}>
                                    <p>{product.title}</p>
                            </div>
                                        
                })
            }          
            
        </div>      
    )
}


export default Products