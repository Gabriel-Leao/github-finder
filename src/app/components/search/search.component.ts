import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { User } from 'src/interfaces/User';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  user: User;
  searchForm = this.formBuilder.group({ userName: '' });

  @Output() search = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {}
}
