const searchButton = document.getElementById('searchButton');
const ingredientsInput = document.getElementById('ingredientsInput');
const recipeList = document.getElementById('recipeList');

const apiKey = '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'; // Replace with your actual API key

searchButton.addEventListener('click', () => {
    const ingredients = ingredientsInput.value;
    
    getRecipeSuggestions(ingredients);
});

async function getRecipeSuggestions(ingredients) {
    const prompt = `Given the ingredients: ${ingredients}, suggest some recipes.`;
    
    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            prompt: prompt,
            max_tokens: 50 // You can adjust this value to control the response length
        })
    });

    const data = await response.json();
    const recipes = data.choices.map(choice => choice.text.trim());

    displayRecipes(recipes);
}

function displayRecipes(recipes) {
    recipeList.innerHTML = '';
    recipes.forEach(recipe => {
        const li = document.createElement('li');
        li.textContent = recipe;
        recipeList.appendChild(li);
    });
}
