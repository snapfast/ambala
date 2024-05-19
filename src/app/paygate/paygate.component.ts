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

  // redirect to calendly
  redirectToExternalWebsite() {
    window.open('https://calendly.com/rahulbali2/30min', '_blank');
  }

  constructor() { }

  ngOnInit() {
  }

}
