import { MatInputModule, MatAutocompleteModule } from "@angular/material";
import { MatFormFieldModule } from "@angular/material/form-field";
import { NgModule } from "@angular/core";

@NgModule({
  // imports: [MatInputModule, MatFormFieldModule],
  exports: [MatFormFieldModule, MatInputModule, MatAutocompleteModule]
})
export class MaterialUiModule {}
