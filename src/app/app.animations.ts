import {animate, group, keyframes, query, state, style, transition, trigger} from '@angular/animations';

export const boxAnimations = trigger('box', [
  state('start', style({background: 'blue'})),
  state('end', style({
    background: 'red',
    transform: 'scale(1.2)'
  })),
  state('special', style({
    background: 'orange',
    transform: 'scale(0.5)',
    borderRadius: '50%'
  })),
  transition('start => end', animate(500)),
  transition('end => start', animate('800ms ease-in-out')),
  transition('* <=> special', [
    group([
      query('h4', animate(250, style({
        fontSize: '1rem',
        color: 'red'
      }))),
      style({background: 'green'}),
      animate(500, style({
        background: 'pink'
      })),
      animate(1000)
    ])
  ]),
  transition(':enter', [
    animate(4000, keyframes([
      style({background: 'red', offset: 0}),
      style({background: 'black', offset: 0.2}),
      style({background: 'yellow', offset: 0.5}),
      style({background: 'orange', offset: 1}),
    ]))
  ]),
  transition(':leave', [
    style({opacity: 1}),
    group([
      animate(750, style({
        opacity: 0,
        transform: 'scale(1.2)'
      })),
      animate(500, style({
        color: '#000',
        fontWeight: 'bold'
      }))
    ])
  ])
]);
