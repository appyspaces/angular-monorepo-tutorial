import { Component } from '@angular/core';
import { ProductsComponent } from '@angular-monorepo-tutorial/products';
// TODO:(td) if we remove this we should remove other files also (technical depth)
// import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [ProductsComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'inventory';
}
