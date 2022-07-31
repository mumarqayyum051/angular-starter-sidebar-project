import { FormBuilder, FormGroup } from '@angular/forms';
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { faker } from '@faker-js/faker';
import { FeedService } from 'src/app/core/services/feed.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  @ViewChild('createPost') createPost!: TemplateRef<any>;
  today = new Date();
  postForm!: FormGroup;
  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private feedService: FeedService,
    private _snackBar: MatSnackBar
  ) {}
  result: any[] = [
    {
      id: 1,
      name: faker.name.findName(),
      email: faker.internet.email(),
      image: faker.image.avatar(),
      date: faker.date.past(),
      description: faker.lorem.paragraph(3),
    },
    {
      id: 2,
      name: faker.name.findName(),
      email: faker.internet.email(),
      image: faker.image.avatar(),
      date: faker.date.past(),
      description: faker.lorem.paragraph(5),
    },
    {
      id: 3,
      name: faker.name.findName(),
      email: faker.internet.email(),
      image: faker.image.avatar(),
      date: faker.date.past(),
      description: faker.lorem.paragraph(10),
    },
  ];

  ngOnInit() {
    this.createForm();
    this.getAllPosts();
  }

  createForm() {
    this.postForm = this.fb.group({
      description: ['', [Validators.required]],
    });
  }

  getAllPosts() {
    this.feedService.getAllPosts().subscribe(
      (response) => {
        console.log(response);
        this.result = response.data;
      },
      ({ message }) => {
        this._snackBar.open(message, 'Dismiss');
      }
    );
  }
  createPostModal() {
    console.log('triggered');
    this.dialog.open(this.createPost, {
      width: '50%',
    });
  }

  onPostClicked() {
    this.feedService.createPost({ post: this.postForm.value }).subscribe(
      (response) => {
        console.log(response);
      },
      ({ message }) => {
        this._snackBar.open(message, 'Dismiss');
      }
    );
  }
}
