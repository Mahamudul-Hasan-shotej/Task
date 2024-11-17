import { Component } from '@angular/core';
import { DataTableComponent } from "./data-table/data-table.component";
import { EmplyeeCreateComponent } from "./emplyee-create/emplyee-create.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [DataTableComponent, EmplyeeCreateComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

}
