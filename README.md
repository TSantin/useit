<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UseIT - Food Waste Saving</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>UseIT - Food Waste Saving</h1>
    </header>
    <main>
        <section class="search-section">
            <h2>Find Recipes</h2>
            <input type="text" id="ingredientsInput" placeholder="Enter your ingredients">
            <button id="searchButton">Search</button>
        </section>
        <section class="results-section">
            <h2>Recipe Suggestions</h2>
            <ul id="recipeList">
                <!-- Recipe suggestions will be added here -->
            </ul>
        </section>
    </main>
    <footer>
        <p>&copy; 2023 UseIT</p>
    </footer>
    <script src="script.js"></script>
</body>
</html>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

header, footer {
    background-color: #333;
    color: #fff;
    padding: 10px;
    text-align: center;
}

main {
    padding: 20px;
}

.search-section, .results-section {
    margin-bottom: 20px;
}

input[type="text"] {
    padding: 10px;
    width: 80%;
    font-size: 16px;
}

button {
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    background-color: #555;
}

#recipeList {
    list-style: none;
    padding: 0;
}

#recipeList li {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
}
