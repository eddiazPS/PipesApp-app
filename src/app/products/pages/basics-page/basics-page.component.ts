import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {


public nameLower: string = 'edgar';
public nameUper: string = 'EDGAR';
public fullName: string = 'eDgAr dIaZ';

public customDate : Date = new Date();

}
