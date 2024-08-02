import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common'
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
// import material web button 3
import { MatButtonModule } from '@angular/material/button';
import {YouTubePlayer} from '@angular/youtube-player';
// import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterOutlet,
    NgOptimizedImage,
    RouterModule,
    MatButtonModule,
    YouTubePlayer,
    // NgxGoogleAnalyticsModule.forRoot('UA-123456789-1'),
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  title = 'जय माता दी अम्बा माता';
  subtitle = 'जोर से बोलो जय माता दी, सारे बोले जय माता दी। बोल सांचे दरबार की जय';

  constructor(private router: Router) { }

  // This function to navigate to another component
  navigateToAppointment() {
    this.router.navigate(['/paygate']);
  }
}

