import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]' //Este es el codigo que le indico a Angular para que implemente mi directiva
})
export class ErrorMsgDirective implements OnInit{

  htmlElement: ElementRef<HTMLElement>;
  @Input() color: string = 'red'

  constructor( private el: ElementRef<HTMLElement> ) { 
    this.htmlElement = el;    
  }

  ngOnInit(): void {
    this.setColor();
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color;
  }

}
