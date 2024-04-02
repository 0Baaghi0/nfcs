import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'LoginFormofNFCS';
  submitted=false;
  loginForm:any=new FormGroup({})

  constructor(private formbuilder:FormBuilder,private router:Router){
  
  }



  ngOnInit(): void {
    this.FormIntalization()
    
  }

  FormIntalization(){
    this.loginForm=this.formbuilder.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    })

  }

  login(){
    console.log(this.loginForm.value.userName);
    if(this.loginForm.value.userName==="Mani"&&this.loginForm.value.password==='143'){
      this.submitted=true
      console.log(this.submitted);
      this.router.navigate(['/Home'])
    }
    else{
      this.submitted=false;
    //  console.log(this.login);
      console.log("incorrect user details")
    }
  }
    }
    
  

