import { Component, OnDestroy } from '@angular/core';
import { catchError, take } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/interfaces/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnDestroy {
  user: User | null;
  error = false;

  onSearch(userName: string): void {
    this.userService
      .getUser(userName)
      .pipe(take(1))
      .subscribe({
        next: (user) => {
          this.error = false;
          this.user = user;
        },
        error: () => {
          this.user = null;
          this.error = true;
        },
      });
  }

  ngOnDestroy(): void {}

  constructor(private userService: UserService) {}
}
