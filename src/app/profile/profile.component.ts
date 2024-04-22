import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  name: string= "Sowmya"
  email: string= "sowmya.n@northfacein.com"
  


}
