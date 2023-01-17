import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { RepositoriesService } from 'src/app/services/repositories.service';
import { Repositories } from 'src/interfaces/Repositories';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],
})
export class RepositoriesComponent implements OnInit {
  repositories: Repositories[];

  ngOnInit(): void {
    const userName = this.route.snapshot.paramMap.get('userName');
    this.reposService
      .getRepositories(userName as string)
      .pipe(take(1))
      .subscribe({
        next: (repositories) => {
          this.repositories = repositories;
        },
      });
  }

  constructor(
    private reposService: RepositoriesService,
    private route: ActivatedRoute
  ) {}
}
