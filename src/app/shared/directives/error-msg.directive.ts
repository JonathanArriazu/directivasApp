import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]' //Este es el codigo que le indico a Angular para que implemente mi directiva
})
export class ErrorMsgDirective implements OnInit{

  constructor() { 
    console.log('constructor directive');
  }

  ngOnInit(): void {
    console.log('NgOnInit en la directiva');
  }

}
