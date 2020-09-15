import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moon-page',
  styleUrls: ['./page.styles.scss'],
  template: `
    <div class="page">
      <h1>Moon</h1>
      <img class="cover" src="assets/images/moon.jpg">
    </div>
  `
})
export class MoonPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
