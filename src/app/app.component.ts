import { Component, ViewChild, HostListener, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  showSidenav: boolean = false;
  breakpoint: number;
  @ViewChild('drawer') drawer: MatDrawer;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 950) {
      this.showSidenav = true;
    } else {
      this.showSidenav = false;
      this.drawer.close();
    }
  }

  constructor() { }

  ngOnInit(): void {
    if (window.innerWidth < 950) {
      this.showSidenav = true;
    } else {
      this.showSidenav = false;
      this.drawer.close();
    }
  }
}
