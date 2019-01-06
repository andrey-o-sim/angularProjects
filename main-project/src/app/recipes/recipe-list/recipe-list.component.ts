import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.less"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A test recipe", "some desc", "https://assets.blog.foodnetwork.ca/imageserve/wp-content/uploads/sites/6/2016/04/vegetarian-pad-thai/x.jpg"),
    new Recipe("A test recipe", "some desc", "https://assets.blog.foodnetwork.ca/imageserve/wp-content/uploads/sites/6/2016/04/vegetarian-pad-thai/x.jpg"),
    new Recipe("A test recipe", "some desc", "https://assets.blog.foodnetwork.ca/imageserve/wp-content/uploads/sites/6/2016/04/vegetarian-pad-thai/x.jpg")
  ];
  constructor() {}

  ngOnInit() {}
}
