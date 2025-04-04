import axios from 'axios'

const baseurl = "http://localhost:5000"

export const getAllToDo = (setTodo) => {
    axios.get(baseurl)
        .then(({ data }) => {
            console.log('data --->', data)
            setTodo(data)
        })
}

export const addToDo = (text, setText, setTodo) => {
    axios.post(`${baseurl}/save`, { text })
        .then((data) => {
            console.log(data)
            setText("")
            getAllToDo(setTodo)
        })

}

export const updateToDo = (text, setText, setTodo, setIsUpdating, toDoId) => {
    axios.post(`${baseurl}/update`, { _id: toDoId, text })
        .then((data) => {
            console.log(data)
            setText("")
            setIsUpdating(false)
            getAllToDo(setTodo)
        })
        .catch((error) => console.log(error))

}

export const deleteTodo = (_id, setTodo) => {
    axios.post(`${baseurl}/delete`, { _id })
        .then((data) => {
            console.log(data)
            getAllToDo(setTodo)
        })
        .catch((error) => console.log(error))

}