import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendAccessService {

  title = 'templateforms';
  userList : any=[];
  data: any;
  expresponse: string="";
  
  constructor(private http: HttpClient){
  }
  
  addUser(uData : any) : any{
    this.http.post('http://localhost:8001/insert',uData.value).subscribe((response) =>
    {this.expresponse = response.toString();
    });
    return this.expresponse;
    
  }
  getAllUsers(){
    this.http.get('http://localhost:8001/getAll').subscribe((response)=>{
      this.userList=response;
      console.log(this.data);
    });
    return this.userList;
  }
}
