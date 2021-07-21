import {useState, useEffect} from 'react'

function Categories () {

    // let [errors, setErrors] = useState(null) 1
    let [categories, setCategories] = useState([
        {
            _id : null,
            name : null
        }
    ])
    
 
    
    useEffect(function () {

        fetch('http://localhost:4001/api/categories')
        .then(response => response.json())
        .then(categories => setCategories(categories))
        .catch(err => {
            console.log(err)          
        })
    }, [])
    

    return (
   
        <div>
        <p>Lista de categorías:</p>
        
            {
                categories.map(function (category) {
                        return <div key={category._id}>
                                    <p>{category.name}</p>
                            </div>
                                        
                })
            }          
            
        </div>      
    )
}

export default Categories