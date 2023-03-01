import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  mostraMenu: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  /**
   * @name abreMenu
   * @description Realiza a ação de exibir o menu
   * @returns {void}
   */
  public abreMenu(): void {
    this.mostraMenu = !this.mostraMenu;
  }
}
