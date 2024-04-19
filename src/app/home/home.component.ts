import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }
  isSubmenuVisible: boolean = false;

  showSubmenu() {
    this.isSubmenuVisible = true;
  }

  hideSubmenu() {
    this.isSubmenuVisible = false;
  }

  backToHome(){
    this.router.navigate(['./landing']);
  }
}
