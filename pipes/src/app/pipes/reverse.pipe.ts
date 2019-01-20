import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "reverse"
})
export class ReversePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value.length === 0) {
      return value;
    }
    var splitString = value.split("");
    var reverseArray = splitString.reverse();
    return reverseArray.join("");
  }
}
