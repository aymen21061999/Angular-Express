import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackendAccessService } from './backend-access.service';
import { AppRoutingModule } from './app-routing.module';
import {} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  ///title = 'templateforms';
  ///userList : any=[];
  ///expresponse: string="";
  ///constructor(private http: HttpClient, private baccess : BackendAccessService){
  ///}
  
  ///getAllUsers():any{
    ///this.userList=this.baccess.getAllUsers();
    //this.http.get('http://localhost:8001/getAll').subscribe((response)=>{
      //this.userList=response;
     // console.log(this.data);
    //});
  ///}

 ///addUser(uData : any):any{
    ///this.expresponse = this.baccess.addUser(uData)
    //console.log(uData);
    //console.log(uData.value);
    //this.userList.push(uData.value);
   
   // this.http.post('http://localhost:8001/insert',uData.value).
   // subscribe((response) =>
   // {this.expresponse = response.toString()});
   // console.log('data added');
///  } 
}

