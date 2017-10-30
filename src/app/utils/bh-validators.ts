import {AbstractControl} from '@angular/forms';

export class BhValidators {

  static isNir(control: AbstractControl) {
    return control.value === 'nir' ?
        null : {notnir: true};
  }

  static asynCisNir(control: AbstractControl) {
    return new Promise( (resolve) => {
      setTimeout( () => resolve(null) , 5000 );
    });
  }

}
