const recipeList = [
    {"title": "test1", "ingredient": "ingredients1", "instruction": "instruction1"},
    {"title": "test2", "ingredient": "ingredients2", "instruction": "instruction2"},
    {"title": "test3", "ingredient": "ingredients3", "instruction": "instruction3"},
];
const titleList = ["test1", "test2", "test3"];

function addRecipe({ title, ingredient, instruction }) {
    recipeList.push({ title, ingredient, instruction });
    titleList.push(title);
}

const recipe = {
    recipeList,
    titleList,
    addRecipe,
};

module.exports = recipe;