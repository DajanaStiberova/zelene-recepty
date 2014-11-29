SELECT image.name_sk, image.name_en, image.link
FROM image
WHERE image.recipe_id = :id
