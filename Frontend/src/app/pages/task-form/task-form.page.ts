import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  templateUrl: './task-form.page.html',
  imports: [CommonModule, FormsModule, IonicModule]
})
export class TaskFormPage implements OnInit {

  id: string | null = null;
  titulo: string = '';
  descripcion: string = '';

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.taskService.getTask(this.id).subscribe((tarea: any) => {
        this.titulo = tarea.titulo;
        this.descripcion = tarea.descripcion;
      });
    }
  }

  guardar() {
    const data = {
      titulo: this.titulo,
      descripcion: this.descripcion
    };

    if (this.id) {
      this.taskService.updateTask(this.id, data).subscribe(() => {
        this.router.navigate(['/tasks']);
      });
    } else {
      this.taskService.createTask(data).subscribe(() => {
        this.router.navigate(['/tasks']);
      });
    }
  }
}
