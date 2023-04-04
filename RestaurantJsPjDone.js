const savetocrud = async (event) => {
    event.preventDefault()
    const price = event.target.price.value
    const dish = event.target.dish.value
    const category = event.target.category.value

    const obj = {
        price,
        dish,
        category
    }

    try {
        const postreq = await axios.post('https://crudcrud.com/api/ab1eee90bedc498489a5c79d61ce19c7/restaurantData', obj)
        showOnScreen(postreq.data)

    } catch {
        document.body.innerHTML = document.body.innerHTML + '<h4>somthing went wrong</h4>'
    }
}
window.addEventListener('DOMContentLoaded', async () => {
    try {
        const getreq = await axios.get('https://crudcrud.com/api/ab1eee90bedc498489a5c79d61ce19c7/restaurantData')

      
        for (let i = 0; i < getreq.data.length; i++) {
            showOnScreen(getreq.data[i])
        }
    }
      catch {
        (error) => {
            console.log(error)
        }
    }
})
const showOnScreen = async (user) => {
    document.getElementById('price').value = ''
    document.getElementById('dish').value = ''
    document.getElementById('category').value = ''

    try {
         const parent = document.getElementById(user.category)
        const child =  `<li id=${user._id}> ${user.price} - ${user.dish} - ${user.category}
   <button onclick= editOrder('${user.price}','${user.dish}','${user.category}','${user._id}')> Edit Order </button>
   <button onclick = deleteOrder('${user._id}','${user.category}')> Delete Order </button> </li>`
        parent.innerHTML = parent.innerHTML + child
    }
    catch {
        (err) => {
            document.body.innerHTML = document.body.innerHTML + "<h4> Something went wrong </h4>"
            console.log(err)
        }
    }
}

const deleteOrder = async (userid, category) => {
    try {
        axios.delete(`https://crudcrud.com/api/ab1eee90bedc498489a5c79d61ce19c7/restaurantData/${userid}`)
        .then(removeFromScreen(userid, category))
    }

    catch {
        (error) => {
            console.log('something went wrong')
        }
    }

}
const removeFromScreen=async(userid, category)=>{
    try{
        const parent = document.getElementById(category)
        const child = document.getElementById(userid)
        parent.removeChild(child)
    }
catch{
        (error) => {
            console.log('something went wrong')
        }
    }
}
const editOrder=async(price, dish, category, userid)=>{
    try{
    document.getElementById('price').value = price
    document.getElementById('dish').value = dish
    document.getElementById('category').value = category

   await deleteOrder(userid, category)
} catch{
        (error) => {
            console.log('something went wrong')
        }
    }
}