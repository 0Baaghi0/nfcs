import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private router:Router){}

  name: string= "Sowmya"
  email: string= "sowmya.n@northfacein.com"
  
  backToLogin(){
    this.router.navigate([''])
  }

}
