import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.module";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      "A test recipe 1",
      "some desc 1",
      "https://assets.blog.foodnetwork.ca/imageserve/wp-content/uploads/sites/6/2016/04/vegetarian-pad-thai/x.jpg",
      [new Ingredient("Meat", 1), new Ingredient("French Fries", 20)]
    ),
    new Recipe(
      "A test recipe 2",
      "some desc 2",
      "https://assets.blog.foodnetwork.ca/imageserve/wp-content/uploads/sites/6/2016/04/vegetarian-pad-thai/x.jpg",
      [new Ingredient("Meat 2", 1), new Ingredient("Buns", 20)]
    ),
    new Recipe(
      "A test recipe 3",
      "some desc 3",
      "https://assets.blog.foodnetwork.ca/imageserve/wp-content/uploads/sites/6/2016/04/vegetarian-pad-thai/x.jpg",
      [new Ingredient("Meat 3", 1), new Ingredient("French Fries 2", 20)]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
