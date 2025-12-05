import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ]
})
export class RegisterPage {

  nombre = '';
  correo = '';
  contrasena = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  registrar() {
    this.authService.register(this.nombre, this.correo, this.contrasena).subscribe({
      next: () => {
        alert("Registrado correctamente");
        this.router.navigate(['/login']);
      },
      error: (err: any) => {
        console.error(err);
        alert("Error en registro");
      }
    });
  }
}
