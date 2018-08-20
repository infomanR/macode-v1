import { Injectable } from '@angular/core';
import {Image} from '../models/image';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {HttpClient, HttpHeaders} from '@angular/common/http';
//import {Observable} from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
//import { HttpErrorHandler, HandleError } from '../http-error-handler.service';


  @Injectable()
  export class ImageService {

      images: Observable<Image[]>;

      constructor(private http: HttpClient) {}
     //Jesus Conde
    	/*getImages(): Observable<Image[]>{
    		return this.http.get('http://localhost:85/magicode/public/v1/image').map((response: Response) => response.json());
     }*/

     getImages():  Observable<Image[]>{
         return this.http.get<Image[]>('http://localhost:85/magicode-v3/public/mostrar').pipe(
          catchError(error=>of([]))
        ); 
     }

      addImage(image: Object): Observable<Image[]>{
        return this.http.post<Image[]>('http://localhost:85/magicode-v3/public/api/guardar', image)//Colocar el prefijo api para hacer referencia a la rutas no protegidas
    .pipe(
      catchError(error=>of([]))
    );
      }
  }