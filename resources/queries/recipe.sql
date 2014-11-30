SELECT recipe.id, 
       recipe.recipe_date,
       recipe.text_sk, 
       recipe.text_en, 
       recipe.title_sk, 
       recipe.title_en,
       recipe.serving_amount, 
       unit.form_first_sk as serving_form_first_sk, 
       unit.form_first_en as serving_form_first_en, 
       unit.form_second_sk as serving_form_second_sk,	
       unit.form_second_en as serving_form_second_en,
       unit.form_third_sk as serving_form_third_sk,
       unit.form_third_en as serving_form_third_en,
       unit.form_fourth_sk as serving_form_fourth_sk,
       unit.form_fourth_en as serving_form_fourth_en,
       recipe.preparation_time, 
       recipe.origin
FROM recipe
INNER JOIN  unit ON unit.id = recipe.serving_unit
WHERE recipe.id = :id
