const apikey = '53H6uOgPIa2op7rksDqXdyifYWNZsh9z'

export default function getGifs({keyword = 'kitty black'} = {}) {
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${keyword}&limit=12&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    
    return fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
       const {data} = response
       const gifs = data.map(image => 
        {
            const {images, title, id} = image 
            const {url} = images.fixed_width
            return {title, id, url}
        })
       return gifs
    })
}