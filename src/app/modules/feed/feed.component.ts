/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { faker } from '@faker-js/faker';
import { CreatePostComponent } from './create-post/create-post.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  @ViewChild('createPost') createPost!: TemplateRef<any>;
  today = new Date();
  constructor(public dialog: MatDialog) {}
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

  ngOnInit() {}

  createPostModal() {
    this.dialog.open(CreatePostComponent);
  }
}
