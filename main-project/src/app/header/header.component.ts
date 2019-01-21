import { Component } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";
import { Subscription } from "rxjs";
import { Response } from "@angular/http";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  private subscription: Subscription;

  constructor(private dataStorageService: DataStorageService) {}

  onSaveData() {
    this.subscription = this.dataStorageService
      .storeRecipes()
      .subscribe((response: Response) => console.log(response));
  }

  onFetchData() {
    this.dataStorageService.getRecipese();
  }
}
