import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  loadedFeature = "recipe";

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyByXbxigDYZWrlwVAFqXGUPlZTR6v8QjJw",
      authDomain: "ng-recipe-book-6afbf.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
