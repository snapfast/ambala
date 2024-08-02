import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common'
import { Router, RouterModule } from '@angular/router';
// import material web button 3
import { MatButtonModule } from '@angular/material/button';
import { DeviceDetectorService } from 'ngx-device-detector';

import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    NgOptimizedImage,
    RouterModule, 
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'जय माता दी अम्बा माता';

  constructor(private deviceService: DeviceDetectorService, private router: Router) {
    this.epicFunction();
  }

  epicFunction() {
    console.log('hello `app` component');
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    const isDesktopDevice = this.deviceService.isDesktop();
    console.log(isMobile);  // returns if the device is a mobile device (android / iPhone / windows-phone etc)
    console.log(isTablet);  // returns if the device us a tablet (iPad etc)
    console.log(isDesktopDevice); // returns if the app is running on a Desktop browser.

    // route to component based on isMobile, isTablet, isDesktopDevice
    if (isMobile && !isTablet && !isDesktopDevice) {
      // route to mobile component
      this.router.navigate(['/main']);
      // this.router.navigate(['/mobile']);
    } else {
      // route to main component
      this.router.navigate(['/main']);
    }
  }
  
}
