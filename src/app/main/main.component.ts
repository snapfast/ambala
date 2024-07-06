import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common'
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
// import material web button 3
import { MatButtonModule } from '@angular/material/button';
import {YouTubePlayer} from '@angular/youtube-player';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterOutlet,
    NgOptimizedImage,
    RouterModule,
    MatButtonModule,
    YouTubePlayer,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  title = 'MAIN';

  constructor(private router: Router) { }

  // This function to navigate to another component
  navigateToAppointment() {
    this.router.navigate(['/paygate']);
  }

}

