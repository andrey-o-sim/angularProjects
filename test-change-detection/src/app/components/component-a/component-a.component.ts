import {
  Component,
  OnInit,
  Input,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentAComponent implements OnInit {
  @Input() testProperty;
  @Input() obj: { fn: string; ln: string };

  constructor(public cd: ChangeDetectorRef) {
    //this.cd.detach();
  }

  ngOnChanges() {
    console.log(`A OnChanges`);
  }

  ngOnInit() {
    console.log('A on init');
    //this.cd.detectChanges();
  }

  ngDoCheck() {
    console.log(`A ngDoCheck`);
  }
  ngAfterViewInit() {
    console.log(`A ngAfterViewInit`);
  }
  ngAfterViewChecked() {
    console.log(`A ngAfterViewChecked`);
  }
  ngAfterContentInit() {
    console.log(`A ngAfterContentInit`);
  }
  ngAfterContentChecked() {
    console.log(`A ngAfterContentChecked`);
  }
}
