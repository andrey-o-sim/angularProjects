import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.less"]
})
export class RecipeListComponent implements OnInit {
  @Output()
  recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      "A test recipe 1",
      "some desc 1",
      "https://assets.blog.foodnetwork.ca/imageserve/wp-content/uploads/sites/6/2016/04/vegetarian-pad-thai/x.jpg"
    ),
    new Recipe(
      "A test recipe 2",
      "some desc 2",
      "https://assets.blog.foodnetwork.ca/imageserve/wp-content/uploads/sites/6/2016/04/vegetarian-pad-thai/x.jpg"
    ),
    new Recipe(
      "A test recipe 3",
      "some desc 3",
      "https://assets.blog.foodnetwork.ca/imageserve/wp-content/uploads/sites/6/2016/04/vegetarian-pad-thai/x.jpg"
    )
  ];
  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
