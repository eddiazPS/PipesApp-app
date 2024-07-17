import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {


// i18n select

public name: string = 'Edgar';
public gender : 'male' | 'female' =  'male';
public invitationMap = {
  'male':'invitarlo',
  'female':'invitrala'
}


changeClient():void {
this.name = 'Melissa';
this.gender = 'female';
}

// i18Plural

public clientes: string []= ['Maria','Pedro','Fernando','Edgar','Herrnando','Melissa','Natalia'];
public clientsMap ={
  '=0': 'no tenemos ningún cliente esperando.',
  '=1': 'tenemos un cliente esperando.',
  '=2': 'tenemos 2 personas esperando.',
  'other': 'tenemos # clientes esperando.',

}

deleteClient(): void {
  this.clientes.shift();
}


// keyValue

public person = {
  "name": "Edgar",
  "age": "36",
  "address": "Bogota, Colombia"
}

// Async Pipe

// public myObservableTimer : Observable<number> = interval(1000).pipe(
//   tap(value => console.log('tap:',value)),
// );


// public promiseValue : Promise<string> = new Promise ((resolve,reject) => {
//   setTimeout( ()=> {
//     resolve ('Tenemos data en la promesa. ');
//   },3900);
// })


}
