import {useState} from 'react'


function ProductCreateForm () {


    let [errors, setErrors] = useState(null)

    let [success, setSuccess] = useState(false)


    let [brands, setBrands] = useState ([
        {
            _id : 1,
            name : "A"
        },
        {
            _id : 2,
            name : "B"
        },
        {
            _id : 3,
            name : "C"
        }


    ])

    let [data, setData] = useState({
        title : null,
        price : null,
        description : null,
        stock : 1,
        model : null,
        brand : null
    })



    function sendFormData(e) {

        console.log(e)

        e.preventDefault()

         
        // fetch('http://localhost:4001/api/products') 
        

           
            

            fetch('http://localhost:4001/products', {
                method : "POST",
                body : JSON.stringify(data),
                headers : {
                    "content-type" : "application/json"
                }
            }).then(response => {

                if (response.status != 201) {
                    
                    setErrors(response.json())

                } else {

                    setSuccess(true)
                    setErrors(null)

                }
            })
        }


        function handleInput(e) {

            console.log(e.target.value)

            let inputName = e.target.name

            setData({
                ...data,
                [inputName] : e.target.value
            })
        
        }


return (
    
    <>
    {
        errors ? <p>Revise todos los campos</p> : ''
    }



    <form action="/products" method="post" noValidate autoComplete="off" onSubmit={sendFormData}>
            <div>
                <label htmlFor="">Título del producto</label>
                <input type="text" name="title" value={data.title} onInput={handleInput}/>
            </div>
            
            <div>
                <label htmlFor="">Descripción</label>
                <textarea name="description" value={data.description} onInput={handleInput}></textarea>
            </div>
            
            <div>
                <label htmlFor="">Modelo</label>
                <input type="text" name="model" value={data.model} onInput={handleInput}/>
            </div>

            <div>
                <label htmlFor="">Precio</label>
                <input type="number" name="price" value={data.price} min="0" onInput={handleInput}/>
            </div>

            <div>
                <label htmlFor="">Marca</label>
                <select name ="brand" value={data.brand} onInput={handleInput}>
                    <option value=""></option>

                    {brands.map(brand => {
                        return <option value={brand._id}>{brand.name}</option>
                    })}

                </select>
            </div>

            <div>
                <label htmlFor="">Stock</label>
                <input type="number" name="stock" value={data.stock} min="1" onInput={handleInput}/>
            </div>

            <div>
                <label htmlFor="">Vendedor</label>
                <input type="text" name="seller_id" onInput={handleInput}/>
            </div>

            <div>
                <label htmlFor="">Vendidos</label>
                <input type="number" name="sold_count" min="0" onInput={handleInput}/>
            </div>
            
                
            <div>
                <button>Enviar</button>
            </div>


        </form>

        
 </>
    


)


}

export default ProductCreateForm