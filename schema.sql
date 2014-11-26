/* Categories table */
DROP TABLE IF EXISTS category CASCADE;
CREATE TABLE category (
       id BIGSERIAL,
       title_sk VARCHAR(255),
       title_en VARCHAR(255),
       link VARCHAR(255) NOT NULL,
       PRIMARY KEY (id)
);

/* Units table */
DROP TABLE IF EXISTS unit CASCADE;
CREATE TABLE unit (
       id BIGSERIAL,
       form_first_sk VARCHAR(255),
       form_first_en VARCHAR(255),
       form_second_sk VARCHAR(255),
       form_second_en VARCHAR(255),
       form_third_sk VARCHAR(255),
       form_third_en VARCHAR(255),
       PRIMARY KEY (id)
);

/* Recipes table */
DROP TABLE IF EXISTS recipe CASCADE;
CREATE TABLE recipe (
       id BIGSERIAL,
       recipe_date TIMESTAMP NOT NULL,
       thumbnail_link VARCHAR(255) NOT NULL,
       title_sk VARCHAR(255),
       title_en VARCHAR(255),
       category_id BIGINT NOT NULL,
       text_sk VARCHAR(255),
       text_en VARCHAR(255),
       serving_amount INT NOT NULL,
       serving_unit BIGINT NOT NULL,
       preparation_time INT NOT NULL,
       origin VARCHAR(255) NOT NULL, 
       PRIMARY KEY (id),
       FOREIGN KEY (category_id) REFERENCES category(id),
       FOREIGN KEY (serving_unit) REFERENCES unit(id)
);

/* Images table */
DROP TABLE IF EXISTS image CASCADE;
CREATE TABLE image (
       id BIGSERIAL,
       recipe_id BIGINT NOT NULL,
       name_sk VARCHAR(255),
       name_en VARCHAR(255),
       link VARCHAR(255) NOT NULL,
       PRIMARY KEY (id),
       FOREIGN KEY (recipe_id) REFERENCES recipe(id)
);

/* Ingredients table */
DROP TABLE IF EXISTS ingredient CASCADE;
CREATE TABLE ingredient (
       id BIGSERIAL,
       name_sk VARCHAR(255),
       name_en VARCHAR(255),
       PRIMARY KEY (id)
);

/* Ingredients to recipes table */
DROP TABLE IF EXISTS ingredient_recipe CASCADE;
CREATE TABLE ingredient_recipe (
       recipe_id BIGINT NOT NULL,
       ingredient_id BIGINT NOT NULL, 
       PRIMARY KEY (recipe_id, ingredient_id),
       FOREIGN KEY (recipe_id) REFERENCES recipe(id),
       FOREIGN KEY (ingredient_id) REFERENCES ingredient(id) 
);

/* Amounts table */
DROP TABLE IF EXISTS amount CASCADE;
CREATE TABLE amount (
       recipe_id BIGINT NOT NULL,
       ingredient_id BIGINT NOT NULL,
       unit_id BIGINT NOT NULL,
       amount_numerator INT NOT NULL,
       amount_denominator INT NOT NULL,
       PRIMARY KEY (recipe_id, ingredient_id),
       FOREIGN KEY (recipe_id) REFERENCES recipe(id),
       FOREIGN KEY (ingredient_id) REFERENCES ingredient(id),
       FOREIGN KEY (unit_id) REFERENCES unit(id)
);
