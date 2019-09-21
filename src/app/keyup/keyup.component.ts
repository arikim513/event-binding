import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup',
  template: `
  <p>(keyup) parameter $event </p>
  <input (keyup)="onKey($event)">
  <p>{{values}}</p>
  `,
  styleUrls: ['./keyup.component.css']
})
export class KeyupComponent implements OnInit {
  values = '';

  constructor() { }

  ngOnInit() {
  }


  onKey(event: any) { // 타입을 지정하지 않은 경우
    this.values += event.target.value + ' | ';
  }

}

@Component({
  selector: 'app-keyup2',
  template: `
  <p>(keyup) parameter $event:KeyboardEvent</p>
  <input (keyup)="onKey($event)">
  <p>{{values}}</p>
  `,
  styleUrls: ['./keyup.component.css']
})
export class KeyUpComponent2 {
  values = '';


  onKey(event: KeyboardEvent) { // 타입을 지정한 경우
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }
}

@Component({
  selector: 'app-keyup3',
  template: `
    <p>(keyup) parameter #참조변수.value</p>
    <input #box (keyup)="onKey(box.value)">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent3 {
  values = '';
  onKey(value: string) {
    this.values += value + ' | ';
  }
}

//(keyup) 이벤트 바인딩은 모든 키 입력에 반응
//사용자가 입력을 끝내는 엔터 키 에만 반응하고 싶다면, 
//키 이벤트를 바인딩 할 때 $event.keyCode를 사용해서 엔터 키 만 반응하도록 필터링
//keyup.enter라고 바인딩하면 엔터키가 입력되었을 떄만 이벤트 핸들러를 실행
@Component({
  selector: 'app-keyup4',
  template: `
    <p>(keyup.enter) parameter #참조변수.value</p>
    <input #box (keyup.enter)="onEnter(box.value)">
    <p>{{value}}</p>
  `
})
export class KeyUpComponent4 {
  value = '';
  onEnter(value: string) { this.value = value; }
}

@Component({
  selector: 'app-keyup5',
  template: `
    <p>(keyup.enter) parameter #참조변수.value</p>
    <p>(blur) parameter #참조변수.value</p>
    <input #box
      (keyup.enter)="update(box.value)"
      (blur)="update(box.value)"
    >
    <p>{{value}}</p>
  `
})
export class KeyUpComponent5 {
  value = '';
  update(value : string) {this.value = value;}
}