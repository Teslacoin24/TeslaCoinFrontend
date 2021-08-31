import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import * as $ from 'jquery';
@Component({
  selector: 'app-mainlanding',
  templateUrl: './mainlanding.component.html',
  styleUrls: ['./mainlanding.component.scss']
})
export class MainlandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      delay: 200, 
      duration: 1000 
    });
    setInterval(() => {
			this.timeBetweenDates();
		}, 1000);
		console.log("timer", this.timer);

	
  }
  timer(arg0: string, timer: any) {
    throw new Error('Method not implemented.');
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: "smooth" });
  }

  timeBetweenDates() {

		var future = new Date("August 2, 2022 10:00:00");
		var now = new Date();
		var diff = future.getTime() - now.getTime();

		var days = Math.floor(diff / (1000 * 60 * 60 * 24));
		var hours = Math.floor(diff / (1000 * 60 * 60));
		var mins = Math.floor(diff / (1000 * 60));
		var secs = Math.floor(diff / 1000);



		var d = days;
		var h = hours - days * 24;
		var m = mins - hours * 60;
		var s = secs - mins * 60;
		$("#days").text(d);
		$("#hours").text(h);
		$("#minutes").text(m);
		$("#seconds").text(s);
		// console.log('days::', d);
		// console.log('hours:::', h)
		// console.log('mins:::', m)
		// console.log('secs:::', s)

	}
}
