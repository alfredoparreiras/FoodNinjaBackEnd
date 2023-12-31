"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "recipes",
      [
        {
          recipe_unique_name: "homemade-pepperoni-pizza",
          title: "Homemade Pepperoni Pizza",
          description: "A recipe for preparing a pepperoni pizza",
          procedure: `1. Preheat the oven to 425 degrees F (220 degrees C). Grease two 12-inch pizza pans.
2. Make sauce: Whisk together water, tomato paste, oregano, basil, garlic powder, onion powder, sugar, salt, and pepper in a medium bowl until smooth. Set aside.
3. Make crust: Combine 2 cups flour, yeast, sugar, and salt in a large bowl. Add warm water and oil; mix until well blended, about 1 minute. Gradually add remaining flour, a little at a time, until a soft, sticky dough forms.
4. Transfer dough to a floured surface; knead until dough is smooth and elastic, about 4 minutes. Add more flour as needed. (If using RapidRise yeast, let dough rest, covered, for 10 minutes.)
5. Divide dough in half. Lightly flour your hands, then pat each piece of dough onto the prepared pizza pans.
6. Top dough with sauce, cheese, and pepperoni.
7. Bake in the preheated oven until crusts are browned and cheese is bubbly, 18 to 20 minutes. Rotate pizza pans between the top and bottom oven racks halfway through baking.`,
          servings: 6,
          time_in_minutes: 120,
          avg_rating: 3.7,
          img_url: "/images/recipeImages/homemade-pepperoni-pizza.jpeg",
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipe_unique_name: "original-poutine",
          title: "Original Poutine",
          description:
            "A recipe for preparing the traditional canadian Poutine",
          procedure: `1. Prepare the gravy: In a small bowl, dissolve the cornstarch in the water and set aside.
2. In a large saucepan, melt the butter. Add the flour and cook, stirring regularly, for about 5 minutes, until the mixture turns golden brown.
3. Add the beef and chicken broth and bring to a boil, stirring with a whisk. Stir in about HALF the cornstarch mixture and simmer for a minute or so. If you'd like your gravy thicker, add a more of the cornstarch mixture, in small increments, as needed, to thicken. Season with pepper. Taste and add additional salt, if necessary, to taste. Make ahead and re-warm or keep warm until your fries are ready.
4. For Deep-Fried Fries: Prepare your potatoes and cut into 1/2-inch thick sticks. Place into a large bowl and cover completely with cold water. Allow to stand at least one hour or several hours. When ready to cook, heat your oil in your deep fryer or large, wide, heavy cooking pot to 300° F.
5. Remove the potatoes from the water and place onto a sheet of paper towel. Blot to remove as much excess moisture as possible.
6. Add your fries to the 300°F oil and cook for 5-8 minutes, just until potatoes are starting to cook but are not yet browned. Remove potatoes from oil and scatter on a wire rack. Increase oil temperature to 375°F Once oil is heated to that temperature, return the potatoes to the fryer and cook until potatoes are golden brown. Remove to a paper towel-lined bowl.
7. To Prepare Poutine: Add your fried or baked fries to a large, clean bowl. Season lightly with salt while still warm. Add a ladle of hot poutine gravy to the bowl and using tongs, toss the fries in the gravy. Add more gravy, as needed to mostly coat the fries.
8. Add the cheese curds and toss with the hot fries and gravy. Serve with freshly ground pepper. Serve immediately.`,
          servings: 2,
          time_in_minutes: 60,
          avg_rating: 5,
          img_url: "/images/recipeImages/original-poutine.jpeg",
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          "recipe_unique_name": "spaghetti-bolognese",
          "title": "Spaghetti Bolognese",
          "description": "Classic Italian pasta dish with savory meat sauce.",
          "procedure": "Boil spaghetti, cook ground beef, mix with tomato sauce, and serve hot.",
          "servings": 4,
          "time_in_minutes": 30,
          "avg_rating": null,
          "img_url": "/images/recipeImages/spaghetti-bolognese.jpeg",
          "user_id": 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          "recipe_unique_name": "chicken-alfredo",
          "title": "Chicken Alfredo",
          "description": "Creamy pasta with grilled chicken strips.",
          "procedure": "Cook chicken, prepare Alfredo sauce, mix with fettuccine, and garnish with parsley.",
          "servings": 3,
          "time_in_minutes": 40,
          "avg_rating": null,
          "img_url": "/images/recipeImages/chicken-alfredo.jpeg",
          "user_id": 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          "recipe_unique_name": "vegetarian-stir-fry",
          "title": "Vegetarian Stir-Fry",
          "description": "A colorful and healthy mix of vegetables in a savory stir-fry sauce.",
          "procedure": "Chop and stir-fry your favorite veggies, add sauce, and serve over rice.",
          "servings": 2,
          "time_in_minutes": 25,
          "avg_rating": null,
          "img_url": "/images/recipeImages/vegetarian-stir-fry.jpeg",
          "user_id": 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          "recipe_unique_name": "grilled-salmon",
          "title": "Grilled Salmon",
          "description": "Delicious and nutritious grilled salmon fillets.",
          "procedure": "Marinate salmon, grill until cooked, and serve with lemon wedges.",
          "servings": 2,
          "time_in_minutes": 20,
          "avg_rating": null,
          "img_url": "/images/recipeImages/grilled-salmon.jpeg",
          "user_id": 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          "recipe_unique_name": "margherita-pizza",
          "title": "Margherita Pizza",
          "description": "Classic pizza with tomato, mozzarella, and fresh basil.",
          "procedure": "Roll out pizza dough, add sauce and toppings, bake until golden.",
          "servings": 4,
          "time_in_minutes": 30,
          "avg_rating": null,
          "img_url": "/images/recipeImages/margherita-pizza.jpeg",
          "user_id": 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          "recipe_unique_name": "vegetable-curry",
          "title": "Vegetable Curry",
          "description": "Hearty and flavorful vegetable curry with aromatic spices.",
          "procedure": "Saute vegetables, add curry paste, simmer until tender, and serve with rice.",
          "servings": 3,
          "time_in_minutes": 35,
          "avg_rating": null,
          "img_url": "/images/recipeImages/vegetable-curry.jpeg",
          "user_id": 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          "recipe_unique_name": "caesar-salad",
          "title": "Caesar Salad",
          "description": "Classic Caesar salad with crisp romaine lettuce and tangy dressing.",
          "procedure": "Toss lettuce with Caesar dressing, croutons, and Parmesan cheese.",
          "servings": 2,
          "time_in_minutes": 15,
          "avg_rating": null,
          "img_url": "/images/recipeImages/caesar-salad.jpeg",
          "user_id": 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          "recipe_unique_name": "homemade-burgers",
          "title": "Homemade Burgers",
          "description": "Juicy homemade burgers with your favorite toppings.",
          "procedure": "Season and grill burger patties, assemble with desired toppings.",
          "servings": 4,
          "time_in_minutes": 25,
          "avg_rating": null,
          "img_url": "/images/recipeImages/homemade-burgers.jpeg",
          "user_id": 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          "recipe_unique_name": "pasta-primavera",
          "title": "Pasta Primavera",
          "description": "Light and colorful pasta dish with a variety of fresh vegetables.",
          "procedure": "Boil pasta, saute veggies, toss with olive oil, and sprinkle Parmesan.",
          "servings": 3,
          "time_in_minutes": 30,
          "avg_rating": null,
          "img_url": "/images/recipeImages/pasta-primavera.jpeg",
          "user_id": 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          "recipe_unique_name": "chocolate-chip-cookies",
          "title": "Chocolate Chip Cookies",
          "description": "Classic chocolate chip cookies with a soft and chewy texture.",
          "procedure": "Mix dough, drop onto a baking sheet, and bake until golden brown.",
          "servings": 20,
          "time_in_minutes": 15,
          "avg_rating": null,
          "img_url": "/images/recipeImages/chocolate-chip-cookies.jpeg",
          "user_id": 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          "recipe_unique_name": "caprese-salad",
          "title": "Caprese Salad",
          "description": "Refreshing salad with tomatoes, fresh mozzarella, and basil.",
          "procedure": "Slice tomatoes and mozzarella, arrange on a plate, and drizzle with balsamic glaze.",
          "servings": 2,
          "time_in_minutes": 10,
          "avg_rating": null,
          "img_url": "/images/recipeImages/caprese-salad.jpeg",
          "user_id": 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          "recipe_unique_name": "chicken-noodle-soup",
          "title": "Chicken Noodle Soup",
          "description": "Comforting soup with tender chicken, noodles, and vegetables.",
          "procedure": "Boil chicken, add veggies and noodles, simmer until cooked, and season to taste.",
          "servings": 4,
          "time_in_minutes": 40,
          "avg_rating": null,
          "img_url": "/images/recipeImages/chicken-noodle-soup.jpeg",
          "user_id": 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          "recipe_unique_name": "shrimp-scampi",
          "title": "Shrimp Scampi",
          "description": "Garlicky shrimp in a lemony and buttery sauce over linguine.",
          "procedure": "Saute shrimp, garlic, and lemon in butter, toss with linguine, and garnish with parsley.",
          "servings": 3,
          "time_in_minutes": 25,
          "avg_rating": null,
          "img_url": "/images/recipeImages/shrimp-scampi.jpeg",
          "user_id": 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          "recipe_unique_name": "mango-salsa-chicken",
          "title": "Mango Salsa Chicken",
          "description": "Grilled chicken topped with a sweet and spicy mango salsa.",
          "procedure": "Grill chicken, prepare mango salsa, and spoon over the cooked chicken.",
          "servings": 2,
          "time_in_minutes": 30,
          "avg_rating": null,
          "img_url": "/images/recipeImages/mango-salsa-chicken.jpeg",
          "user_id": 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          "recipe_unique_name": "greek-salad",
          "title": "Greek Salad",
          "description": "Refreshing salad with tomatoes, cucumbers, olives, and feta cheese.",
          "procedure": "Combine veggies and feta, drizzle with olive oil, and sprinkle with oregano.",
          "servings": 2,
          "time_in_minutes": 15,
          "avg_rating": null,
          "img_url": "/images/recipeImages/greek-salad.jpeg",
          "user_id": 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          "recipe_unique_name": "beef-tacos",
          "title": "Beef Tacos",
          "description": "Tasty tacos with seasoned beef, lettuce, and salsa.",
          "procedure": "Cook seasoned beef, assemble tacos with your favorite toppings.",
          "servings": 4,
          "time_in_minutes": 20,

          "avg_rating": null,
          "img_url": "/images/recipeImages/beef-tacos.jpeg",
          "user_id": 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          "recipe_unique_name": "ratatouille",
          "title": "Ratatouille",
          "description": "A delightful vegetable medley baked to perfection.",
          "procedure": "Layer sliced veggies in a baking dish, drizzle with olive oil, and bake until tender.",
          "servings": 3,
          "time_in_minutes": 45,
          "avg_rating": 2.5,
          "img_url": "/images/recipeImages/ratatouille.jpg",
          "user_id": 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          "recipe_unique_name": "pumpkin-soup",
          "title": "Pumpkin Soup",
          "description": "Creamy and flavorful pumpkin soup for a cozy evening.",
          "procedure": "Roast pumpkin, blend with broth, and simmer with spices until smooth.",
          "servings": 4,
          "time_in_minutes": 35,
          "avg_rating": null,
          "img_url": "/images/recipeImages/pumpkin-soup.jpeg",
          "user_id": 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          "recipe_unique_name": "teriyaki-chicken-stir-fry",
          "title": "Teriyaki Chicken Stir-Fry",
          "description": "Savory teriyaki chicken with a mix of colorful vegetables.",
          "procedure": "Stir-fry chicken and veggies, add teriyaki sauce, and serve over rice.",
          "servings": 3,
          "time_in_minutes": 30,
          "avg_rating": null,
          "img_url": "/images/recipeImages/teriyaki-chicken-stir-fry.jpeg",
          "user_id": 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("recipes", null, {});
  },
};
