import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'LoginFormofNFCS';
  loginForm:any=new FormGroup({})

  constructor(private formbuilder:FormBuilder){
  
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
}
