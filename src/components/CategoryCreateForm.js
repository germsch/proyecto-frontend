import {useEffect, useState} from 'react'



function CategoryCreateForm () {


    let [errors, setErrors] = useState(null)

    let [success, setSuccess] = useState(false)

    let [categories, setCategories] = useState([])

    let [data, setData] = useState({
        
        name : '',
        categoryId : null,

    })


    useEffect(function () {

        fetch('http://localhost:4001/api/categories')
        .then(response => response.json())
        .then(categories => setCategories(categories))

    }, [])


    function sendFormData(e) {

        // console.log(e)

        e.preventDefault()
         
            fetch('http://localhost:4001/api/categories', {
                method : "POST",
                body : JSON.stringify(data),
                headers : {
                    "content-type" : "application/json"
                }
            }).then(async response => {

                if (response.status == 201) {
                    
                    setData({name: '', categoryId : null})

                } else {
                    let json = await response.json()
                    return Promise.reject(json)
                }
            }).catch(errors => {
                console.log(errors.message.name.msg)
                
            })

    }


    function handleInput(e) {

        // console.log(e.target.value)

        let inputName = e.target.name

        setData({
            ...data,
            [inputName] : e.target.value
        })

    }

    

    return (
    <div>
        <form action="/categories" method="post" noValidate autoComplete="off" onSubmit={sendFormData}>
            
            <select name="categoryId" onInput={handleInput}>
                <option value=""></option>

                {categories.map((c, i) => <option key={i} value={c._id}>{c.name}</option>)}
            </select>
            
            
            <div>
                <label htmlFor="">Nombre de la categoría</label>
                <input type="text" name="name" value={data.name} onInput={handleInput}/>
                
            </div>

            <div>
                <button>Enviar</button>
            </div>

        </form>
    </div>
    )


}


export default CategoryCreateForm