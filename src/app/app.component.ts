import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'LoginFormofNFCS';
  submitted = false;
  loginForm: any = new FormGroup({});
  showNavbar: boolean = true; // Change this based on your condition
  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  // showNavbar: boolean = true; // Change this based on your condition

  ngOnInit(): void {
    this.FormIntalization();
    // this.updateNavbarVisibility();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const firstChild = this.activatedRoute.firstChild;
        if (firstChild !== null && firstChild !== undefined) {
          const routeConfig = firstChild.snapshot.routeConfig;
          if (routeConfig !== null && routeConfig !== undefined) {
            this.showNavbar = !(routeConfig?.path === '' || 'forgotPassword' ); 
            // this.showNavbar = !(routeConfig?.path === '' || 'home' || 'forgotPassword' || 'forgetPage');
          }
        }
      }
    });
    
    
    


  }
  updateNavbarVisibility() {
    
  }
  FormIntalization() {
    this.loginForm = this.formbuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    console.log(this.loginForm.value.userName);
    if (
      this.loginForm.value.userName === 'Sowmya' &&
      this.loginForm.value.password === '123'
    ) {
      this.submitted = true;
      console.log(this.submitted);
      this.router.navigate(['/Home']);
    } else {
      this.submitted = false;
      //  console.log(this.login);
      console.log('Incorrect user details');
    }
  }
}
