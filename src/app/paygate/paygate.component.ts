import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-paygate',
  standalone: true,
  imports: [MatButtonModule, NgOptimizedImage],
  templateUrl: './paygate.component.html',
  styleUrl: './paygate.component.css'
})
export class PaygateComponent {

  // redirect to external webstie after clicking a button in new tab
  redirectToExternalWebsite() {
    window.open('https://www.google.com', '_blank');
  }

  constructor() { }

  ngOnInit() {
  }

}
