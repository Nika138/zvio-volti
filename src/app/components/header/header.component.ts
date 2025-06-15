import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isMobileMenuOpen = false;
  isProductsMenuOpen = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) {
      this.isProductsMenuOpen = false;
    }
  }

  toggleProductsMenu(): void {
    this.isProductsMenuOpen = !this.isProductsMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    this.isProductsMenuOpen = false;
  }

  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (
      this.isMobileMenuOpen &&
      !mobileMenuButton?.contains(target) &&
      !mobileMenu?.contains(target)
    ) {
      this.closeMobileMenu();
    }
  }
}
