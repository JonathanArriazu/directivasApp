import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]' //Este es el codigo que le indico a Angular para que implemente mi directiva
})
export class ErrorMsgDirective implements OnInit{

  private _mensaje: string = 'Este campo es requerido';

  htmlElement: ElementRef<HTMLElement>;
  @Input() set color ( valor: string ) { //El valor es el color que yo estoy recibiendo
    this.htmlElement.nativeElement.style.color= valor;
  }
 /*  @Input() mensaje: string = 'Este campo es necesario' */
  @Input() set mensaje( valor: string ) {
    this.htmlElement.nativeElement.innerHTML= valor;
    this._mensaje = valor;
  }

  @Input() set valido( valor: boolean ) {
    if ( valor ) {
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  constructor( private el: ElementRef<HTMLElement> ) { 
    this.htmlElement = el;    
  }

  ngOnInit(): void {
    this.setMensaje();
    this.setClase();
  }

  /* setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color;
  } */

  setMensaje() :void {
    this.htmlElement.nativeElement.innerText= this._mensaje;
  }
 
  setClase() :void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

}
