
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent {


 
  title = 'ForgotPassword';
  forgotpassword:any =new FormGroup({});
submitted: any;
  constructor(private formbuilder: FormBuilder,private router:Router){}
 
  ngOnInit(): void {
    this.FormIntialization();
  }
  FormIntialization(){
    this.forgotpassword=this.formbuilder.group({
      EnterNewPassword:['',Validators.required],
      ReEnterPassword:['',Validators.required]
 
    })
   
  }
 
  SaveNewPassword(){
    //alert("hello")
    this.router.navigate(['/NPUSucess'])
     //this.router.navigate(['./fgpwpage'])
     
  }
} {
 
}
 
 