import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../models/IEmployee';
import { Observable } from 'rxjs';
@Injectable({
    providedIn:'root'
})

export class EmployeeService{

  constructor(private http:HttpClient){}

  // private _url:string="https://jsonplaceholder.typicode.com/posts";

  private _url:string="http://localhost:3000/posts";


  getEmployees():Observable<IEmployee[]>{ 
      return this.http.get<IEmployee[]>(this._url);
  }
  getEmployee(id):Observable<IEmployee>{
    return this.http.get<IEmployee>(this._url+'/'+id);
  }
  create(data):Observable<IEmployee> {  
    return this.http.post<IEmployee>(this._url,{'id':data.id,'name':data.name, 'semester':data.semeste}) ; 
  } 
  updateData(data):Observable<IEmployee[]>{  
    return this.http.put<IEmployee[]>(this._url + '/' + data.id,{'id':data.id,'name':data.name, 'semester':data.semeste})  
  }
  delete(id):Observable<IEmployee> {  
    return this.http.delete<IEmployee>(this._url + '/' + id);  
  }
}