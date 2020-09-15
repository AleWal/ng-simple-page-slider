import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  BehaviorSubject,
  fromEvent,
  interval,
  merge,
  Observable,
  Subscription
} from 'rxjs';
import {
  filter,
  takeWhile,
  map,
  throttleTime
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PageSliderService {
  protected intervalPeriod = 5000;

  protected started = new BehaviorSubject<boolean>(false);
  protected reseted = new BehaviorSubject<boolean>(false);

  protected pageSliderSubscription: Subscription;
  protected navigateTo$ = new BehaviorSubject<string>(null);

  protected timerResetEvents$: Observable<any>;

  private urls =  new Array<string>(
    'jupiter',
    'mars',
    'moon',
    'saturn',
    'sun',
    'uranus'
  );

  constructor(
    public router: Router
  ) { }

  startPageSlider(): void {
    this.stopPageSlider();
    this.setTimerResetEvents();
    this.subscribeToNavigation();
    this.subscribeToAutoRouter();
    this.subscribeToTimerResetEvents$();
    this.navigateToUrl(this.urls[0]);
    this.started.next(true);
  }

  stopPageSlider(): void {
    if (this.pageSliderSubscription) {
      this.pageSliderSubscription.unsubscribe();
    }
    this.navigateTo$.next(null);
    this.started.next(false);
  }

  private setTimerResetEvents(): void {
    if (!this.timerResetEvents$) {
      this.timerResetEvents$ = merge(
        fromEvent(window, 'scroll'),
        fromEvent(window, 'click'),
        fromEvent(window, 'wheel')
      );
    }
  }
  private subscribeToNavigation(): void {
    this.navigateTo$
      .pipe(filter(r => r !== null))
      .subscribe(r =>
        this.router.navigateByUrl(r, {skipLocationChange: true})
      );
  }

  private subscribeToAutoRouter(): void {
    this.pageSliderSubscription = interval(this.intervalPeriod).pipe(
      takeWhile(v => this.started.value),
      map(v => {
        if (! this.reseted.value) {
          this.navigateToNext();
        }
        this.reseted.next(false);
      })
    ).subscribe();
  }

  private subscribeToTimerResetEvents$(): void {
    this.timerResetEvents$
      .pipe(
        throttleTime(300),
      )
      .subscribe(t => {
        this.navigateToNext();
        this.reseted.next(true);
      });
  }

  private navigateToNext(): void {
    const lastRoute = this.navigateTo$.value;
    if (!lastRoute) {
      this.navigateToUrl(this.urls[0]);
    } else {
      const lastRouteIndex = this.urls.indexOf(lastRoute);
      if (lastRouteIndex === (this.urls.length - 1)) {
        this.navigateToUrl(this.urls[0]);
      } else {
        const nextRouteIndex = lastRouteIndex + 1;
        this.navigateToUrl(this.urls[nextRouteIndex]);
      }
    }
  }

  private navigateToUrl(url: string): void {
    this.navigateTo$.next(url);
  }
}
