import { Subscription } from 'rxjs';
import { NavbarService } from './../../services/navbar.service';
import { Component, OnDestroy } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnDestroy {
  showNavbar: boolean = true;
  subscription: Subscription;
  constructor(private NavbarService: NavbarService) {
    this.subscription = this.NavbarService.showNavbar.subscribe((value)=>{
      this.showNavbar = value;
    })
  }
  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
