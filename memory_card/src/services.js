const baseUrl = `https://api.nookipedia.com/villagers?api_key=${import.meta.env.VITE_API_KEY}`

const get = async () => {
    const res = await fetch(baseUrl, { mode: 'cors' })
    return await res.json()
}

export default { get }