import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { startWith, map } from "rxjs/operators";

export interface State {
  flag: string;
  country: string;
  countryCode: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent {
  filteredStates: Observable<State[]>;
  stateCtrl = new FormControl();

  states: State[] = [
    {
      country: "Ukraine",
      countryCode: "+380",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg"
    },
    {
      country: "Russia",
      countryCode: "+7",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/e/e3/Flag_of_Russia_with_border.svg"
    },
    {
      country: "Canada",
      countryCode: "+1",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg"
    },
    {
      country: "US",
      countryCode: "+1",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
    }
  ];

  constructor() {
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(""),
      map(state => (state ? this._filterStates(state) : this.states.slice()))
    );
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(
      state =>
        state.country.toLowerCase().indexOf(filterValue) === 0 ||
        state.countryCode.indexOf(filterValue) === 0
    );
  }
}
