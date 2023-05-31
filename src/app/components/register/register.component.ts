import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userDetail = new User();
  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router) { }
  register() {
    this.authService.register(this.userDetail)
      .then(response => {
        this.toastr.success('Registration successful.!');
        this.router.navigate(['/login']);
      })
      .catch(error => {
        this.toastr.error('Internnal server error.!');
      })
  }
} 