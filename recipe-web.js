const recipeWeb = {
    pageWrap: function(content) {
        return `
        <!DOCTYPE html>
        <html>
        <head> <title>Recipe Page</title>
        <link rel="stylesheet" href="/stylesheets/style.css"> 
        </head>       
            <body>
                <div id="recipe-app">
                <script src="fetch-recipe.js"></script>
                <noscript>
                    ${content}
                </noscript>                
                </div>
            </body>
        </html>
        `;
    },
    
    mainPage: function (recipe) {
        return this.pageWrap(`
            <h1>Recipe Title List</h1>
            <div class="recipe-list">
                ${this.getRecipeTitleList(recipe)} 
            </div>
            <div class="create-new-recipe">
                <form action="/new-recipe" method="GET">
                    <button id="new-recipe-button" type="submit">New Recipe</button>
                </form>
            </div>
            
        `)
    },

    getRecipeTitleList: function (recipe) {
        return `
            <ol id="recipe-title-list" class="title">
            ${ recipe.titleList.map( this.formatTitle ).join('') }
            </ol>
            
        `;
    },

    formatTitle: function (title) {
        return `
            <li>
                <div id="title" class="title">
                <a class="titlename" href="http://localhost:3000/detail?title=${title}">${title}</a>
                </div>
            </li>
        `;
    },

    newRecipePage: function () {
        return this.pageWrap(`
            <h1>Create New Recipe</h1>
            <div id="new-recipe-form">
            <form action="/new-recipe" method="POST">
            <table width="800" height="400" border="2">
            <tbody>
                <tr>
                    <th scope="row">Title</th>
                    <td><input id="title-input" name="titlename" type="text" value="" required></td>
                </tr>
                <tr>
                    <th scope="row">Ingredients</th>
                    <td><textarea id="ingre-input" name="ingredients" required></textarea></td>
                </tr>
                <tr>
                    <th scope="row">Instructions</th>
                    <td><textarea id="insruct-input" name="instructions" required></textarea></td>
                </tr>
            </tbody>
            </table>
            <button id="create-new-recipe" type="submit">Create</button> 
            </form>
            <form class="return" action="/" method="GET">
                <button id="return-main-page" type="submit">Return to Home</button>
            </form>
            </div>
           
        `)
    },

    detailPage: function (recipeContent) {
        return this.pageWrap(`
            <h1>Detail of Recipe</h1>
            <div class="detail" id="detail-recipe"><table width="800" border="1">
            <tbody>
            <tr>
                Title:  <label id="title">${recipeContent.title}</label>
            </tr>
            <tr>
                <td>Ingredients: <label id="title">${recipeContent.ingredient}</label></td>
                <td>Instructions: <label id="title">${recipeContent.instruction}</label></td>
            </tr>
            </tbody>
            </table>
            <form class="return" action="/" method="GET">
                <button type="submit">Return to Home</button>
            </form>
            </div>
            
        `)
    }
};

module.exports = recipeWeb;