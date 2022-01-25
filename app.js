const searchBtn = document.querySelector("#searchBtn");
const deleteBtn = document.querySelector("#deleteBtn");
const input = document.querySelector("input");
const display = document.querySelector("#display");


searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    getSearchData(input.value);
    input.value = "";
});

deleteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const allGiphy = document.querySelectorAll("img");
    for (let gip of allGiphy) {
        gip.remove();
    }
})



async function getSearchData(search) {
    const result = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=vOJZezog2klMSI0NHmxghcFA9S5v509C&q=${search}&limit=30&offset=0&lang=en`);
    const gipArray = result.data.data;
    const ranIndex = Math.floor(Math.random() * gipArray.length);

    const newGiph = document.createElement("img");
    newGiph.src = gipArray[ranIndex].images.original.url;


    display.append(newGiph);

}



