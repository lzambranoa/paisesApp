import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  // Se emite un evento hacia el buscar del por pais component
  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

 termino: string = '';

 ngOnInit() {
   this.debouncer
   .pipe(
    debounceTime(300) //con este pais no emite el debouncer hasta pasado el tiempo estimado
   )
   .subscribe( valor => {
     this.onDebounce.emit(valor)
   });
 }

 buscar(){
  this.onEnter.emit( this.termino );
 }

 teclaPresionada(){
    this.debouncer.next(this.termino);
 }

}
