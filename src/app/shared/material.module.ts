import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [CommonModule, MatCardModule, MatPaginatorModule, MatIconModule],
  declarations: [],
  exports: [MatCardModule, MatPaginatorModule, MatIconModule, MatTableModule],
})
export class MaterialModule {}
