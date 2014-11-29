SELECT ingredient.name_sk,
       ingredient.name_en
FROM ingredient
WHERE ingredient.id = :id
