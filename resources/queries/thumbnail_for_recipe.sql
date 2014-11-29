SELECT recipe.id, recipe.recipe_date,
recipe.thumbnail_link, recipe.title_sk, recipe.title_en
FROM recipe
WHERE recipe.id = :id 
