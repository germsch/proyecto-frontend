import {useEffect, useState} from 'react'

function Brands () {


    let [brands, setBrands] = useState([
        {
            name : null
        }
    ])
    
 
    
    useEffect(function () {

        fetch('http://localhost:4001/api/brands')
        .then(response => response.json())
        .then(brands => setBrands(brands))
        .catch(err => {
            console.log(err)          
        })
    }, [])
    

    return (
   
        <div>
        <p>Lista de productos:</p>
        
            {
                brands.map(function (brand) {
                        return <div key={brand._id}>
                                    <p>{brand.name}</p>
                            </div>
                                        
                })
            }          
            
        </div>      
    )
}


export default Brands