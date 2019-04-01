import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/map';

@Injectable()
export class GitsearchService {
  private username:string;
  private clientid = 'cc4994abdd5a';
  private clientsecret = '63c6a8d051cbdc669ec6819d380f';

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