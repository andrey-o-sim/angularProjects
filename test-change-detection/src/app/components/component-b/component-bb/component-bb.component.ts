import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-bb',
  templateUrl: './component-bb.component.html',
  styleUrls: ['./component-bb.component.less']
})
export class ComponentBbComponent implements OnInit {
  @Input() testProperty;
  constructor() {}

  ngOnInit() {}
}
