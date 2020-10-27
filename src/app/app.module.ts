import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './component/app.component';
import {HttpClientModule} from '@angular/common/http';
import { AllUsersComponent } from './component/all-users/all-users.component';
import {RouterModule} from '@angular/router';
import { AllPostsComponent } from './component/all-posts/all-posts.component';
import { AllCommentsComponent } from './component/all-comments/all-comments.component';
import { AllPostsUserIdComponent } from './component/all-posts-user-id/all-posts-user-id.component';
@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    AllPostsComponent,
    AllCommentsComponent,
      AllPostsUserIdComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'posts', component: AllPostsComponent},
      {path: 'comments', component: AllCommentsComponent},
      {path: 'users', component: AllUsersComponent, children: [
        {path: 'posts/:id', component: AllPostsUserIdComponent},

        ]
      },

      ])
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
