import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

// @Directive({
//   outputs: ['clicks:myClick']  // 프로퍼티_이름:별칭
// })
@Directive({selector: '[myClick]'})
export class ClickDirective {
  //  @Output(별칭) 프로퍼티_이름 = ...
  @Output('myClick') clicks = new EventEmitter<string>(); 

  toggle = false;

  constructor(el: ElementRef) {
    el.nativeElement
      .addEventListener('click', (event: Event) => {
        this.toggle = !this.toggle;
        this.clicks.emit(this.toggle ? 'Click!' : '');
      });
  }
}