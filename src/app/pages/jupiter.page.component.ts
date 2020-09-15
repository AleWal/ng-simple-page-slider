import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jupiter-page',
  styleUrls: ['./page.styles.scss'],
  template: `
    <div class="page">
      <h1>Jupiter</h1>
      <img class="cover" src="assets/images/jupiter.jpg">
    </div>
  `
})
export class JupiterPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
