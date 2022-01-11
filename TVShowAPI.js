const searchForm = document.querySelector('#search')
const searchBtn = document.querySelector('button')
const container = document.querySelector('#container')

searchForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const inputValue = searchForm.elements.query.value;
    const config = { params: { q: inputValue } };
    const res = await axios.get(`https://api.tvmaze.com/search/shows?`, config)
    displayShows(res.data)
})


const displayShows = async (shows) => {
    for (let result of shows) {
        try {
            const img = document.createElement('img') 
            img.src = result.show.image.medium;
            container.append(img)
            const title = document.createElement('span')
            title.innerText = result.show.name;
            container.append(title)
        } catch {
            console.log('cant load')
        }
    }
}
