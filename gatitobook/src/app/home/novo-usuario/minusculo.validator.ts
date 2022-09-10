import { AbstractControl } from '@angular/forms';

export function minusculoValidator(control: AbstractControl) {
  const validator = control.value as String;
  if (validator != validator.toLocaleLowerCase()) {
    return { minusculo: true };
  } else {
    return null;
  }
}
