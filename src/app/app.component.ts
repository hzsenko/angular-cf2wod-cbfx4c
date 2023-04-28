import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: `my-app`,
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.less`],
})
export class AppComponent {
  readonly form = new FormGroup({
    term: new FormControl(''),
    additionalTerm: new FormControl(''),
  });

  filterBy = 'name';
  additionalFilterBy = 'age';

  readonly filter = (item: string, value: string): boolean => {
    return `${item}`?.toLowerCase().includes(value?.toLowerCase());
  };

  readonly additionalFilter = (item: number, value: number): boolean => {
    return !item ? true : item > value;
  };

  source = {
    columns: ['name', 'age'],
    data: [
      {
        name: 'john',
        age: 20,
      },
      {
        name: 'tom',
        age: 25,
      },
      {
        name: 'bob',
        age: 19,
      },
    ],
  };
}
