import {useState} from 'react'

function BrandCreateForm () {

    let [errors, setErrors] = useState(null)
    let [success, setSuccess] = useState(false)
    let [data, setData] = useState({
        
        name : null,

    })



    function sendFormData(e) {
        
        console.log(e)
        
        e.preventDefault()
                 
            fetch('http://localhost:4001/api/brands', {
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

        let inputName = e.target.name

        setData({
            ...data,
            [inputName] : e.target.value
        })
    }


    return (

        <form action="/brands" method="post" noValidate autoComplete="off" onSubmit={sendFormData}>
            <div>
                <label htmlFor="">Nombre de la marca</label>
                <input type="text" name="name" value={data.title} onInput={handleInput}/>
            </div>

            <div>
                <button>Enviar</button>
            </div>
        </form>
        

    )
}


export default BrandCreateForm