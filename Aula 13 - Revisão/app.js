const form = document.getElementById("form")
const categorySelect = document.getElementById("category")
const descriptionInput = document.getElementById("description")
const dateInput = document.getElementById("date")

form.addEventListener("submit", event => {
    event.preventDefault()
    const category = categorySelect.getAttribute('value')
    const description = descriptionInput.value 
    const date = dateInput.value 
    createTask(category, description, date)
})


function createTask(category, description, date){
    console.log('${category} ${description} ${date}')
}