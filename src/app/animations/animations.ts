import {
    animate,
    query,
    style,
    transition,
    trigger
} from '@angular/animations';

export const fader =
  trigger('routeAnimations', [
    transition('* <=> *', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
        }),
      ], { optional: true }),
      query(':enter', [
        animate('3300ms ease', style({
          opacity: 1,
          transform: 'scale(1) translateY(0)'
        })),
      ], { optional: true }),
    ]),
  ]);
