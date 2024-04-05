import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isSubmenuVisible: boolean = false;

  showSubmenu() {
    this.isSubmenuVisible = true;
  }

  hideSubmenu() {
    this.isSubmenuVisible = false;
  }
}
