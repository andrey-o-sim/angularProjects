import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.module";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.less"]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 5)
  ];
  constructor() {}

  ngOnInit() {}
}
