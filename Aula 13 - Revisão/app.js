const form = document.getElementById("form")
const categorySelect = document.getElementById("category")
const descriptionInput = document.getElementById("description")
const dateInput = document.getElementById("date")
const pendingUl = document.getElementById("pending")

form.addEventListener("submit", event => {
    event.preventDefault()
    const category = categorySelect.value
    const description = descriptionInput.value 
    const date = dateInput.value 
    createTask(category, description, date)
})


function createTask(category, description, date){
    console.log('${category} ${description} ${date}')

    const taskLi = document.createElement{"li"}
    const label = document.createElement{"label"}
    const checkbox = document.createElement{"input"}


    checkbox.type = "checkbox"
    checkbox.addEventListener{'change', finish}
    
    label.textContent = description
    taskLi.appendChild(label)
    
    pendingUl.appendChild(taskLi)
}