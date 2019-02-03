import { Effect, Actions } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import * as AuthAction from "./auth.actions";
import { map, switchMap, mergeMap } from "rxjs/operators";
import * as firebase from "firebase";
import { from } from "rxjs";
import "rxjs/add/operator/do";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {
  // https://angular-2-training-book.rangle.io/handout/state-management/ngrx/side_effects.html
  // Side Effects нужен для работы с ассинхронными операциями (это как redux-thunk middleware в реакте).
  // @Effect() это декоратор, который нужно задавать для каждой side effect переменной
  // actions$ это список всех actions нашего приложения
  // Когда выполняется action - AuthAction.TRY_SIGNUP, мы его перехватываем и идем по observables
  // ofType позволяет нам проверить, если сработал action с типом TRY_SIGNUP, то выполнить какие-то действия (если опустить ofType, то данный код будет выполняться для всех actions)

  @Effect()
  authSignup = this.actions$.ofType(AuthAction.TRY_SIGNUP).pipe(
    map((action: AuthAction.TrySignup) => {
      return action.payload;
    }),
    switchMap((authData: { username: string; password: string }) => {
      return from(
        firebase
          .auth()
          .createUserWithEmailAndPassword(authData.username, authData.password)
      );
    }),
    switchMap(() => {
      return from(firebase.auth().currentUser.getIdToken());
    }),
    // возвращает массив Observables
    mergeMap((token: string) => {
      return [
        {
          type: AuthAction.SIGNUP
        },
        {
          type: AuthAction.SET_TOKEN,
          payload: token
        }
      ];
    })
  );

  @Effect()
  authSigin = this.actions$.ofType(AuthAction.TRY_SIGNIN).pipe(
    map((action: AuthAction.TrySignin) => {
      return action.payload;
    }),
    switchMap((authData: { username: string; password: string }) => {
      return from(
        firebase
          .auth()
          .signInWithEmailAndPassword(authData.username, authData.password)
      );
    }),
    switchMap(() => {
      return from(firebase.auth().currentUser.getIdToken());
    }),
    mergeMap((token: string) => {
      this.router.navigate(["/"]);
      // возвращает массив Observables
      return [
        {
          type: AuthAction.SIGNIN
        },
        {
          type: AuthAction.SET_TOKEN,
          payload: token
        }
      ];
    })
  );

  // мы не планируем диспатчить новые actions в конце данного side эффекта
  @Effect({ dispatch: false })
  authLogout = this.actions$.ofType(AuthAction.LOGOUT).do(() => {
    this.router.navigate(["/"]);
  });

  constructor(private actions$: Actions, private router: Router) {}
}
