import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {

  @Input() set customIf( condicion: boolean ) {
    if ( condicion ) { //Si la condicion se cumple, muestro el elemento
      this.viewContainer.createEmbeddedView( this.templateRef );
    } else {
      this.viewContainer.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<HTMLElement>, //Necesito una referencia, la cual la indico
    // colocando un * delante del nombre de la directiva en el html, es decir *customIf
    private viewContainer: ViewContainerRef //Esto es lo que remueve el contenedor
  ) { }

}
