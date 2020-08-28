export async function getAllPokemon(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            resolve(data);
        }) // url is fetched, each .then receives a function and process it, result of that is then passed onto the next .then
    })
}

export async function getPokemon(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            resolve(data);
        })
    })
}