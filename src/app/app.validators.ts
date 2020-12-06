import {FormControl} from '@angular/forms';

export class AppValidators {
  static bannedEmail(control: FormControl) {
    if (['test@mail.ru', 'admin@mail,ru'].includes(control.value)) {
      return {
        bannedEmail: true
      };
    }

    return null;
  }

  static uniqEmail(control: FormControl) {
    return new Promise(resolve => {
      setTimeout(() => {
        if (control.value === 'async@mail.ru') {
          resolve({
            uniqEmail: true
          });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
