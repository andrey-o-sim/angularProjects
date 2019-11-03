import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-ba',
  templateUrl: './component-ba.component.html',
  styleUrls: ['./component-ba.component.less']
})
export class ComponentBaComponent implements OnInit {
  @Input() testProperty;
  constructor() {}

  ngOnInit() {}
}
