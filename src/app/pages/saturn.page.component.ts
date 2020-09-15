import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saturn-page',
  styleUrls: ['./page.styles.scss'],
  template: `
    <div class="page">
      <h1>Saturn</h1>
      <img class="cover" src="assets/images/saturn.jpg">
    </div>
  `
})
export class SaturnPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
