import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'un-authorized',
  templateUrl: './un-authorized.component.html',
  styleUrls: ['./un-authorized.component.css']
})
export class UnAuthorizedComponent {
  imgUrl: string = '/assets/adcd.webp';

  constructor(private router: Router) {

  }

  goBack() {
    this.router.navigate(['/login']);
  }
}

