import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loop-back',
  template: `
  <input #box (keyup)="0">
  <p>{{box.value}}</p>
  `,
  styleUrls: ['./loop-back.component.css']
})
export class LoopBackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}

//(keyup)="0"
//Angular는 키입력과 같은 비동기 이벤트가 발생할 때만 바인딩을 갱신하고 화면도 갱신합니다. 
//그래서 이 예제에서는 keyup 이벤트에 0을 바인딩하고 있는데, 
//이것은 템플릿 실행문을 바인딩하는 가장 간단한 방법입니다. 
//이 템플릿 실행문은 그 자체로 아무 의미가 없지만, 
//Angular가 화면을 갱신할 수 있도록 이벤트를 바인딩하는 입장에서는 꼭 필요한 구문입니다.