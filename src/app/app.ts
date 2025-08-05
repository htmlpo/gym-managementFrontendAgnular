import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Home } from '../home/home';
 

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet,RouterModule,Home], // <-- tu peux ajouter ici tout composant standalone
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected title = 'gym-management';
}
