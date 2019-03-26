(function IIFE() {
    const textBox = document.getElementById("title-input");
    const ingreBox = document.getElementById("ingre-input");
    const instructBox = document.getElementById("instruct-input");
    const newRecipeButton = document.getElementById("create-new-recipe");
    if(textBox && newRecipeButton) {

        newRecipeButton.disabled = !textBox.value;
        textBox.addEventListener('input', (e) => {
            if(e.target.value) {
                newRecipeButton.disabled = false;
            } else {
                newRecipeButton.disabled = true;
            }
        });
    }
})();