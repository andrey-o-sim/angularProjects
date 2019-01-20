import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.module";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

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

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
