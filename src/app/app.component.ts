import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from './animations/animations';
import { PageSliderService } from './page-slider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fader
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ng-page-slider';

  constructor(private pageSliderService: PageSliderService) { }

  ngOnInit(): void {
    this.pageSliderService.startPageSlider();
  }

  ngOnDestroy(): void {
    this.pageSliderService.stopPageSlider();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet
      && outlet.activatedRouteData
      && outlet.activatedRouteData['animation'];
  }
}
