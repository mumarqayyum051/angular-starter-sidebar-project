import { EventEmitter } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss'],
})
export class PermissionsComponent implements OnInit {
  @Output() closeDrawer: EventEmitter<any> = new EventEmitter();
  form!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      read: [false, Validators.required],
      write: [false, Validators.required],
      update: [false, Validators.required],
      delete: [false, Validators.required],
    });
  }

  onCheckAll(e: any) {
    if (e.checked) {
      this.form.patchValue({
        read: true,
        write: true,
        update: true,
        delete: true,
      });
    } else {
      this.form.patchValue({
        read: false,
        write: false,
        update: false,
        delete: false,
      });
    }
  }

  onDrawerClose() {
    this.closeDrawer.emit();
  }
}
