import { Component } from '@angular/core';

interface MenuItem{
  ruta: string;
  texto: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
    li{
      cursor:pointer;
    }
    `
  ]
})
export class MenuComponent {

  menu: MenuItem[]=[
    {
      ruta:"/graficas/barras",texto:"Barras"
    },
    {
      ruta:"/graficas/dobles",texto:"Barras dobles"
    },
    {
      ruta:"/graficas/dona",texto:"Dona"
    },
    {
      ruta:"/graficas/http",texto:"Dona Http"
    },
  ]


}
