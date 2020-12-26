import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Fullpage Scrolling';
  activeUIIndex = 1;

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) { }

  scrollCustomImplementation(element: HTMLElement, index) {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: element,
    });
    this.activeUIIndex = index;
  }
  
}
