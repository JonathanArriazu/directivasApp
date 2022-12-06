import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

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

}
