const api_url = "https://api.unsplash.com/photos/random/";
const api_key = "38tsM_QPy3o2LnaWkQQe5vnoTUddCblfvQZ3oyblAOc";
const imagen_random_dom = document.getElementById("imagenrandom");
async function imagenRandom (query) {
    const url = `${api_url}?client_id=${api_key}&query=${query}&orientation=portrait`;
    const request = await fetch(url);
    const json = await request.json();
    const imagen_url = json.urls.full;
    imagen_random_dom.src = imagen_url;
    console.log(imagen_url);
    console.log(json);
}
imagenRandom("vegetarian food restaurant")