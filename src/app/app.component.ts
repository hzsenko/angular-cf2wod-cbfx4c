import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Account {
  readonly name: string;
  readonly account: string;
}

const BANK: readonly Account[] = [
  {
    name: 'Ruble',
    account: '1234567890987654321',
  },
  {
    name: 'Dollar',
    account: '1234567890987654321',
  },
];

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  value = null;
  readonly bank = BANK;
}
