import { Component } from '@angular/core';
import { catchError } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/interfaces/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  user: User | null;
  error = false;

  onSearch(userName: string): void {
    this.userService.getUser(userName).subscribe(
      (user) => (this.user = user),
      (error) => {
        this.user = null;
        this.error = true;
      }
    );
  }

  constructor(private userService: UserService) {}
}
