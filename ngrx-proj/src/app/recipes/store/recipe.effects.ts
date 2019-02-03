import { Effect, Actions } from "@ngrx/effects";
import { HttpClient, HttpRequest } from "@angular/common/http";
import { switchMap, map, withLatestFrom } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

import { Recipe } from "../recipe.model";
import * as RecipeActions from "../store/recipe.actions";
import * as fromRecipe from "../store/recipe.reducers";

@Injectable()
export class RecipeEffects {
  @Effect()
  recipeFetch = this.actions$.ofType(RecipeActions.FETCH_RECIPES).pipe(
    switchMap((action: RecipeActions.FetchRecipes) => {
      return this.httpClient.get<Recipe[]>(
        "https://ng-recipe-book-6afbf.firebaseio.com/recipes.json",
        {
          observe: "body",
          responseType: "json"
        }
      );
    }),
    map(recipes => {
      console.log(recipes);
      for (let recipe of recipes) {
        if (!recipe["ingredients"]) {
          recipe["ingredients"] = [];
        }
      }
      return {
        type: RecipeActions.SET_RECIPES,
        payload: recipes
      };
    })
  );

  @Effect({ dispatch: false })
  recipeStore = this.actions$.ofType(RecipeActions.STORE_RECIPES).pipe(
    withLatestFrom(this.store.select("recipes")),
    switchMap(([action, state]) => {
      const req = new HttpRequest(
        "PUT",
        "https://ng-recipe-book-6afbf.firebaseio.com/recipes.json",
        state.recipes,
        { reportProgress: true }
      );
      return this.httpClient.request(req);
    })
  );

  constructor(
    private actions$: Actions,
    private httpClient: HttpClient,
    private store: Store<fromRecipe.FeatureState>
  ) {}
}
