import { Component } from '@angular/core';
import { Slider } from '../shared/slider/slider';
import { Navbar } from '../shared/navbar/navbar';
import { Footer } from '../shared/Footer/footer';
import { Menu } from '../menu/menu';

@Component({
  selector: 'app-home',
  imports: [Slider,Navbar,Footer,Menu],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
