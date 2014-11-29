SELECT recipe.id, 
       recipe.recipe_date,
       recipe.text_sk, 
       recipe.text_en, 
       recipe.title_sk, 
       recipe.title_en,
       recipe.serving_amount, 
       unit.form_first_sk, 
       unit.form_first_en, 
       unit.form_second_sk,	
       unit.form_second_en,
       unit.form_third_sk,
       unit.form_third_en,
       recipe.preparation_time, 
       recipe.origin
FROM recipe
INNER JOIN  unit ON unit.id = recipe.serving_unit
WHERE recipe.id = :id
