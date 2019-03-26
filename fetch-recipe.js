const indexPage = "http://localhost:3000/";
const detailPage = "http://localhost:3000/detail";
const newRecipePage = "http://localhost:3000/new-recipe";

function getMainPage() {
    fetch(indexPage)
        .then(function (response) {
            return response.json();
        })
}


function createNewRecipe() {
    const titleEle = document.getElementById("title-input");
    const ingredientEle = document.getElementById("ingre-input");
    const instructionEle = document.getElementById("instruct-input");

    fetch(detailPage, {
        method: 'POST',
        headers: new Headers({
            'content-type': 'application/json'
        }),
        body: JSON.stringify({ title: titleEle.value, ingredient: ingredientEle.value, instruction: instructionEle.value })
    })
}