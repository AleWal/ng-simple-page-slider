import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sun-page',
  styleUrls: ['./page.styles.scss'],
  template: `
    <div class="page">
      <h1>Sun</h1>
      <img class="cover" src="assets/images/sun.jpg">
    </div>
  `
})
export class SunPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
