import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,CommonModule,MatTableModule,MatPaginatorModule,MatSortModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[MatTableDataSource]
})
export class AppComponent {
  title = 'task_one';
}
