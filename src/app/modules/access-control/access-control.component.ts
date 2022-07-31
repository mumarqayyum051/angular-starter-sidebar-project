import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AccessControlService } from 'src/app/core/services/access-control.service';
import { PermissionsComponent } from './permissions/permissions.component';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-access-control',
  templateUrl: './access-control.component.html',
  styleUrls: ['./access-control.component.scss'],
})
export class AccessControlComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('addAdminUserModal') addAdminUserModal!: TemplateRef<any>;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private accessControlService: AccessControlService
  ) {}
  ngOnInit() {
    this.createForm();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  createForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      allowRead: [false, Validators.required],
      allowCreate: [false, Validators.required],
      allowUpdate: [false, Validators.required],
      allowDelete: [false, Validators.required],
    });
  }

  onCheckAll(e: any) {
    if (e.checked) {
      this.form.patchValue({
        allowRead: true,
        allowCreate: true,
        allowUpdate: true,
        allowDelete: true,
      });
    } else {
      this.form.patchValue({
        allowRead: false,
        allowCreate: false,
        allowUpdate: false,
        allowDelete: false,
      });
    }
  }

  openAdminUserModal() {
    this.dialog.open(this.addAdminUserModal, {
      width: '40%',
    });
  }

  onAddAdminUser() {
    let form = this.form.value;
    form.allowRead = form.allowRead ? 1 : 0;
    form.allowCreate = form.allowCreate ? 1 : 0;
    form.allowUpdate = form.allowUpdate ? 1 : 0;
    form.allowDelete = form.allowDelete ? 1 : 0;

    this.accessControlService.createUser(form).subscribe(
      (response) => {
        console.log('response', response);
      },
      (error) => {
        console.log('error', error);
      }
    );
  }

  get f() {
    return this.form.controls;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
