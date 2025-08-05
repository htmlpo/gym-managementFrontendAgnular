import { Component } from '@angular/core';
import { Footer } from '../shared/Footer/footer';
import { Navbar } from '../shared/navbar/navbar';
import { SliderMembers } from './slider-members/slider-members';

@Component({
  selector: 'app-members',
  standalone:true,
  imports: [Footer,Navbar,SliderMembers],
  templateUrl: './members.html',
  styleUrl: './members.scss',
})
export class Members {
}
