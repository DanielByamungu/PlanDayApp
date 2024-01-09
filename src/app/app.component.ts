import { Component } from '@angular/core';
import { animate, query, style, transition, trigger } from '@angular/animations';
import { Router, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('routeAnimation',[
      transition('*=>*',[
        query(':enter',
        [
          style({
           opacity:'0',
           //transform:'translateX(-80px)',
           display:'block',
           height:'100%'
          }),
          animate(1000,style({
            opacity:1
          }))
        ],{optional:true}) 
      ])
        
  ])
]

})
export class AppComponent {
  //title = 'Plan-myDay';
  prepareRoute(outlet: RouterOutlet){
    return outlet.activatedRoute.snapshot.url
  }
}
