import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [
    RouterOutlet,
    HttpClientModule   // 👈 IMPORTAR AQUÍ SOLUCIONA TODO
  ]
})
export class AppComponent {}
