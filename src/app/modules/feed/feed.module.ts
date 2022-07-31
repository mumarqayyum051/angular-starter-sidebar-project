import { Routes } from './../../core/auth/auth-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(Routes)],
  declarations: [FeedComponent, CreatePostComponent],
})
export class FeedModule {}
