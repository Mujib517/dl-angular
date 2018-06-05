import { Component, Input, SimpleChange } from '@angular/core'


@Component({
  selector: 'app-counter',
  template: `<h1>{{count}}</h1>`
})

export class CounterComponent {
  @Input()
  count: number;

  constructor(){
    console.log("Constructor");
  }

  ngOnInit() {
    console.log("OnInit()");
  }

  ngDoCheck() {
    console.log("Do check()");
  }

  ngOnDestroy() {
    console.log("Destoryed");
  }

  ngOnChanges(change:SimpleChange){
    console.log("on changes",change);
  }
}