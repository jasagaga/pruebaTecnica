import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule // Necesario para ngModel
  ],
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss']
})
export class TasksPage {

  segment: string = 'pendientes';  // ← Para ion-segment
  tareas: any[] = [];              // ← Tu lista de tareas

  constructor() {}

  logout() {
    console.log('Logout');
  }

  marcarCompleta(tarea: any) {
    console.log('Marcar completa:', tarea);
  }

  delete(tarea: any) {
    console.log('Eliminar tarea:', tarea);
  }
}
