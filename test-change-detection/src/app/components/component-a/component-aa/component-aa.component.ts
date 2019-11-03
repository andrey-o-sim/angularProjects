import {
  Component,
  OnInit,
  Input,
  ChangeDetectorRef,
  OnChanges,
  SimpleChanges,
  DoCheck,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-component-aa',
  templateUrl: './component-aa.component.html',
  styleUrls: ['./component-aa.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentAaComponent implements OnInit, OnChanges, DoCheck {
  @Input() testProperty;
  @Input() obj: { fn: string; ln: string };

  constructor(public cd: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('AA on change');
  }

  ngOnInit() {
    console.log('AA on init');
  }

  ngDoCheck(): void {
    console.log('AA Do Check');
  }

  ngAfterViewInit() {
    console.log(`AA ngAfterViewInit`);
  }
  ngAfterViewChecked() {
    console.log(`AA ngAfterViewChecked`);
  }
  ngAfterContentInit() {
    console.log(`AA ngAfterContentInit`);
  }
  ngAfterContentChecked() {
    console.log(`AA ngAfterContentChecked`);
  }

  markForCheck() {
    this.cd.markForCheck();
  }
}
