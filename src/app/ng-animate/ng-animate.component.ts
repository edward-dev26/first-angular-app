import {Component} from '@angular/core';
import {transition, trigger, useAnimation} from '@angular/animations';
import {pulse, rollOut} from 'ng-animate';

@Component({
  selector: 'app-ng-animate',
  template: `
    <button (click)="toggleBox()" class="btn btn-secondary">Toggle</button>
    <hr>
    <div [@toggle] *ngIf="visible" class="ng-box"></div>
  `,
  styleUrls: ['./ng-animate.component.scss'],
  animations: [
    trigger('toggle', [
      transition('void => *', useAnimation(pulse, {
        params: {
          timing: 3
        }
      })),
      transition('* => void', useAnimation(rollOut))
    ])
  ]
})
export class NgAnimateComponent {
  visible = true;

  toggleBox() {
    this.visible = !this.visible;
  }
}
