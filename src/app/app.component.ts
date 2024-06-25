import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeFeatureModule } from './features/home/home-feature.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeFeatureModule, CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngrx-demo';
}
