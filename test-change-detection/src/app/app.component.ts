import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  value = 'In Progress';
  obj = { fn: 'Andrey', ln: 'Simonenko' };

  changeValue() {
    this.value = 'OK';

    this.obj.fn += '1';
    this.obj.ln += '1';
    //this.obj = { fn: 'Andrii', ln: 'Symonenko' };
  }
}
