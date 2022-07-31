import { Routes } from './feed-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(Routes)],
  declarations: [FeedComponent, CreatePostComponent],
})
export class FeedModule {}
