SELECT ingredient.name_sk, ingredient.name_en
FROM recipe
INNER JOIN amount ON recipe.id = amount.recipe_id
INNER JOIN ingredient ON ingredient.id = amount.ingredient_id
WHERE recipe.id = :recipe

