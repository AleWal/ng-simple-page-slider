import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uranus-page',
  styleUrls: ['./page.styles.scss'],
  template: `
    <div class="page">
      <h1>Uranus</h1>
      <img class="cover" src="assets/images/uranus.jpg">
    </div>
  `
})
export class UranusPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
