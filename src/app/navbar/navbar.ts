import { Component, OnInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.initializeMobileMenu();
    }
  }

  private initializeMobileMenu() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navbarMenu = document.getElementById('navbarMenu');

    if (mobileToggle && navbarMenu) {
      mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navbarMenu.classList.toggle('active');
      });

      // Close menu when clicking on a link
      const navLinks = navbarMenu.querySelectorAll('.navbar-link');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileToggle.classList.remove('active');
          navbarMenu.classList.remove('active');
        });
      });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isBrowser) {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    }
  }
}
