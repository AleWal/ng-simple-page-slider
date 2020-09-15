import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mars-page',
  styleUrls: ['./page.styles.scss'],
  template: `
    <div class="page">
      <h1>Mars</h1>
      <img class="cover" src="assets/images/mars.jpg">
    </div>
  `
})
export class MarsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
