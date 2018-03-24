import {Injectable} from '@angular/core';
import {Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Global } from './global'
import { Planificacion  } from '../models/planificacion';

@Injectable()//para utilizar en otra Clases
export class PlanificacionServices{
   public url: string;
   public token :string;
     Planificacion: Planificacion[];
     selectedPlanificacion : Planificacion;
   constructor(private _http: Http){
     this.url = Global.url;
   }


   GeneraCodigo(){
       let headers = new Headers({'Content-Type':'application/json',
                                     'Authorization': 'bearer '+this.getToken()});
      return this._http.get(this.url+'GeneraCodigo' ,{headers: headers})
               .map(res => res.json());
    }

    InsertCabecera(Cabecera){
      let json = JSON.stringify(Cabecera);
      let params =json;

         let headers = new Headers({'Content-Type':'application/json',
                                     'Authorization': 'bearer '+this.getToken()});
      return this._http.post(this.url+'InsertaCabeceraPlan', params ,{headers: headers})
               .map(res => res.json());
    }

    InsertDetalle(detalle){
      let json = JSON.stringify(detalle);
      let params =json;

         let headers = new Headers({'Content-Type':'application/json',
                                     'Authorization': 'bearer '+this.getToken()});
      return this._http.post(this.url+'InsertaDetallePlan', params ,{headers: headers})
               .map(res => res.json());
    }
    ConsultaPlanAdmin(detalle){
      let json = JSON.stringify(detalle);
      let params =json;

         let headers = new Headers({'Content-Type':'application/json',
                                     'Authorization': 'bearer '+this.getToken()});
      return this._http.post(this.url+'DetallePlanAdmin', params ,{headers: headers})
               .map(res => res.json());
    }
///Accede a local Sotrage y devuele los datos ya procesados
    getToken(){
       let token = localStorage.getItem('token');
        if(token != "undefined"){
           this.token =token;
        }else
        {
          this.token=null;
        }
         return this.token;
    }


}
