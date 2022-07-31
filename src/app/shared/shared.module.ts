import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  declarations: [],
})
export class SharedModule {}
