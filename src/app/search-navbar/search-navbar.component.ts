import { Component, OnInit } from '@angular/core';
import { GitsearchService } from './../github-service/github.service';

@Component({
  selector: 'app-search-navbar',
  templateUrl: './search-navbar.component.html',
  styleUrls: ['./search-navbar.component.css']
})
export class GitsearchComponent implements OnInit {
    profile: any;
    repos: any;
    username: string;

  constructor(private gitsearchService: GitsearchService) {
    
   }

   findProfile(){
     this.gitsearchService.updateProfile(this.username);
     this.gitsearchService.getProfileDesc().subscribe(profile =>{
      console.log(profile);
      this.profile = profile;
    });
    this.gitsearchService.getProfileRepos().subscribe(repos =>{
      console.log(repos);
      this.repos = repos;
    })
   }

  ngOnInit() {
  }

}