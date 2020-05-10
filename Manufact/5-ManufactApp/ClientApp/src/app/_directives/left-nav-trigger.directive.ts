import { Directive, HostListener } from '@angular/core';

@Directive({ selector: '[appLeftNavTrigger]' })
export class LeftNavTriggerDirective {
  constructor() {}

  @HostListener('click') onClick = () => {
    const leftNav = document.getElementsByClassName('admin-left-nav')[0];

    if (!leftNav) {
      return;
    }

    leftNav.classList.toggle('close');
  };
}
