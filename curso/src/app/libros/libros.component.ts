import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vwn-libros',
  template: `
    <div class="row">
      <vwn-mock class="col-6"></vwn-mock>
      <vwn-google class="col-6"></vwn-google>
      <vwn-byservicio class="col-6"></vwn-byservicio>
    </div>
    <div class="row">
      <vwn-from-api class="col-6"></vwn-from-api>
    </div>
  `,
  styles: [
  ]
})
export class LibrosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
