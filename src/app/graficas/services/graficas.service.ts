import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(
    private http:HttpClient
  ) { }

  getUsuariosRS(){
    return this.http.get("http://localhost:3000/grafica");
  }

  getUsuariosRSDonaData(){
    return this.getUsuariosRS()
      .pipe(
        delay(1500),
        map(response=>{
          const labels = Object.keys(response);
          const data:number[] = [];
          (Object.values(response)).forEach(str => {
            data.push(Number(str));
          });
          return{labels,data};
        })
      )
  }


}
