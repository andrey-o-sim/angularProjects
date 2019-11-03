import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-component-ab',
  templateUrl: './component-ab.component.html',
  styleUrls: ['./component-ab.component.less']
})
export class ComponentAbComponent implements OnInit {
  @Input() testProperty;
  @Input() obj: { fn: string; ln: string };

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('AB on change');
  }

  ngOnInit() {
    console.log('AB on init');
  }

  ngDoCheck(): void {
    console.log('AB Do Check');
  }

  ngAfterViewInit() {
    console.log(`AB ngAfterViewInit`);
  }
  ngAfterViewChecked() {
    console.log(`AB ngAfterViewChecked`);
  }
  ngAfterContentInit() {
    console.log(`AB ngAfterContentInit`);
  }
  ngAfterContentChecked() {
    console.log(`AB ngAfterContentChecked`);
  }
}
