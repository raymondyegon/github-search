import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/map';

@Injectable()
export class GitsearchService {
  private username:string;
  private clientid = '75fbc3436ae7b2cacc1c';
  private clientsecret = '3865052f662ff45e88db544725eedad0c1424758';

  constructor(private http:HttpClient) { 
    console.log("service works");
    this.username = 'raymondyegon'; 

  }
  getProfileDesc(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  
  }
  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  
  }
  updateProfile(username:string){
    this.username = username;
  }

}