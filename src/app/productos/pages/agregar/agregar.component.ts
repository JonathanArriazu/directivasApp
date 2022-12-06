import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent implements OnInit {

  texto1: string = 'Campo requerido'
  color: string = 'red';

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  })

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }

  tieneError ( campo: string ) : boolean {
    //Como puede que le envie un campo que no existe, si no coloco el || false, me marca error
    return this.miFormulario.get(campo)?.invalid || false;
    // otra forma seria: return this.miFormulario.get(campo)!.valid ==> TS confia en mi, siempre va a tener un valor el campo
  }

  cambiarTexto() {
    this.texto1 = Math.random().toString();
  }

  cambiarColor() {
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16)); //codigo para cambiar color de forma aleatoria
    this.color = color;
  }

}
