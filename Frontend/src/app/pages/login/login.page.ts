import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

// IMPORTAR módulos necesarios
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule,HttpClientModule]
})

export class LoginPage {

  correo: string = '';
  contrasena: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    this.authService.login(this.correo, this.contrasena).subscribe({
      next: () => this.router.navigate(['/tasks']),   // <-- cambia a donde quieres
      error: () => alert("Credenciales incorrectas")
    });
  }
}
