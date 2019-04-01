import { Component, OnInit, Input, Output } from '@angular/core';

import { Githubuser} from './../GithubUser/githubuser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() githubUser: Githubuser;

  constructor() { }

  ngOnInit() {
  }

}
