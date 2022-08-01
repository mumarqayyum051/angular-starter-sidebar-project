import { FormBuilder, FormGroup } from '@angular/forms';
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { faker } from '@faker-js/faker';
import { FeedService } from 'src/app/core/services/feed.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AccessControlService } from 'src/app/core/services/access-control.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  @ViewChild('createPost') createPost!: TemplateRef<any>;
  today = new Date();
  postForm!: FormGroup;
  permissions: any = [];
  randomImage = faker.image.avatar();
  selectedPost: any;
  submitMode = true; // post // ! update

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private feedService: FeedService,
    private _snackBar: MatSnackBar,
    private accessControlService: AccessControlService,
    private userService: UserService
  ) {}
  result: any[] = [];
  user: any;
  ngOnInit() {
    this.createForm();
    this.getAllPosts();
    this.user = this.userService.getCurrentUser();
    this.getPermissions();
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
        if (response?.data.length > 0) {
          response.data.forEach((item: any) => {
            item.image = faker.image.avatar();
          });
          this.result = response.data;
        } else {
          this.result = [];
        }
      },
      ({ message }) => {
        this._snackBar.open(message, 'Dismiss');
      }
    );
  }
  getPermissions() {
    this.accessControlService.getPermissions(this.user.id).subscribe(
      (response) => {
        if (response.data.length > 0) {
          let permissions: any = [];
          Object.entries(response.data[0]).forEach(([key, value]) => {
            if (key.includes('allow')) {
              permissions.push({
                [key]: value,
              });
            }
          });

          this.permissions = permissions;
        } else {
          this.permissions = [];
        }
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
        this.getAllPosts();
        this.postForm.reset();
        this.dialog.closeAll();
      },
      ({ message }) => {
        this._snackBar.open(message, 'Dismiss');
      }
    );
  }

  onUpdateClicked() {
    this.feedService
      .onPostUpdate({ post: this.postForm.value }, this.selectedPost.id)
      .subscribe(
        (response) => {
          console.log(response);
          this._snackBar.open('Post Update!!', '', {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            duration: 2000,
          });
          this.getAllPosts();
        },
        ({ message }) => {
          this._snackBar.open(message, 'Dismiss');
        }
      );
  }

  postAction(post: any, actionType: any) {
    console.log(post);
    this.selectedPost = post;
    if (actionType === 'deletePost') {
      this.feedService.onPostDelete(post.id).subscribe(
        (response) => {
          console.log(response);
          this._snackBar.open('Post Deleted!!', '', {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            duration: 2000,
          });
          this.getAllPosts();
        },
        ({ message }) => {
          this._snackBar.open(message, 'Dismiss');
        }
      );
    }
    if (actionType === 'updatePost') {
      this.postForm.patchValue(post);
      this.submitMode = false;
      const dialog = this.dialog.open(this.createPost, {
        width: '50%',
      });

      dialog.afterClosed().subscribe((result) => {
        this.submitMode = true;
      });
    }
  }
}
