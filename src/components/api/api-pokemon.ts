

const get = async (name: string) => {
    const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      };
    console.log('works')
    return await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, requestOptions)
    .then(res => res.json())

}

const api = {
    get: get
}

export default api;