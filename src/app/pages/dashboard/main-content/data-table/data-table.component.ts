import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName?: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
}

// Data array (initially empty)
let ELEMENT_DATA: User[] = [];

@Component({
  selector: 'app-data-table',
  standalone: true,
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  imports: [MatPaginator, MatSort, MatSortModule, CommonModule, MatInputModule, MatFormFieldModule, MatTableModule,MatIcon],
})
export class DataTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'lastName', 'age', 'phone','actions'];
  dataSource = new MatTableDataSource<User>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;

  ngOnInit(): void {
    this.fetchUsers();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator!;
    this.dataSource.sort = this.sort!;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async fetchUsers(): Promise<void> {
    try {
      const res = await fetch('/api/users?sortBy=firstName&order=desc');
      if (!res.ok) {
        throw new Error(`Error in user fetch: ${res.statusText}`);
      }

      const data = await res.json();

      ELEMENT_DATA = data.users.map((user: any) => ({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        maidenName: user.maidenName || '',
        age: user.age,
        gender: user.gender,
        email: user.email,
        phone: user.phone,
        username: user.username,
        password: user.password,
        birthDate: user.birthDate,
        image: user.image,
        bloodGroup: user.bloodGroup,
        height: user.height,
        weight: user.weight,
      }));

      // Update data source after data is fetched
      this.dataSource.data = ELEMENT_DATA;
      console.log('Fetched Users:', ELEMENT_DATA);

    } catch (error) {
      console.error('Error during user fetch:', error);
    }
  }

  deleteElement(element: User) {
    const index = this.dataSource.data.findIndex((e) => e.id === element.id);
    if (index !== -1) {
      // Remove the element from the data array
      this.dataSource.data.splice(index, 1);
      // Update the data source after deletion
      this.dataSource.data = [...this.dataSource.data];
    }
  }
}
