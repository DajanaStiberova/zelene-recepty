INSERT INTO category (title_sk, title_en, link)
VALUES ('Najnovšie recepty', 'Newest recipes', '/home');

INSERT INTO category (title_sk, title_en, link)
VALUES ('Hlavné jedlá', 'Main dishes', '/main-dishes');

INSERT INTO unit (form_first_sk, form_second_sk, form_third_sk)
VALUES ('Porcia', 'Porcie', 'Porcií');

INSERT INTO recipe (recipe_date, thumbnail_link, title_sk, title_en, category_id,
text_sk, text_en, serving_amount, serving_unit, preparation_time, origin) VALUES
(TIMESTAMP '2014-11-24 00:00:00', 'images/thumbnails/guacamole.jpg',
'Avokádové guacamole', 'Guacamole', 2, 'recipes/guacamole_sk.md',
'recipes/guacamole_en.md', 2, 1, 15, 'http://katherineschwarzenegger.com/');
