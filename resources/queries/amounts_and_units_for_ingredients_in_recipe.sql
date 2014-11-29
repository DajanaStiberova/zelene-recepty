SELECT ingredient.name_sk, 
       ingredient.name_en,	
       amount.amount_numerator, 
       amount.amount_denominator, 
       unit.form_first_sk, 
       unit.form_first_en, 
       unit.form_second_sk,	
       unit.form_second_en,
       unit.form_third_sk,
       unit.form_third_en
FROM amount 
INNER JOIN ingredient ON ingredient.id = amount.ingredient_id
INNER JOIN unit ON unit.id = amount.unit_id
WHERE amount.recipe_id = :recipe
