import data from "../data/data.json"

export const requestData = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(data)
        }, 1000)
    })
}

export const requestDataById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const item = data.find((el) => el.id === id) // search item
            item ? resolve(item) : reject({error:'No product found'}) // if exist resolve else reject
        }, 1000)
    })
}