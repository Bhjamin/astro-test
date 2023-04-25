const list = []


module.exports = {

    addToDo: (req, res) => {
        list.push(req.body)
        console.log('list', list)
        res.sendStatus(200)
    },

    getToDo: (req, res) => {
        const listToSend = list
        res.status(200).send(listToSend)
    },
    
    clearList: (req, res) => {
        const numToRemove = list.length
        list.splice(0, numToRemove)
        res.status(200).send(list)
    },

    updateToDo: (req, res) => {
        const {updatedToDo, toDoId} = req.body
        let string = toDoId
        let num = Number(string)
        const index = list.findIndex(item => item.id === num)
        console.log('index', index)
        list[index].toDo = updatedToDo
        res.status(200).send('all good')
    }
}