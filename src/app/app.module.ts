import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './component/app.component';
import {HttpClientModule} from '@angular/common/http';
import { AllUsersComponent } from './component/all-users/all-users.component';
import {RouterModule} from '@angular/router';
import { AllPostsComponent } from './component/all-posts/all-posts.component';
import { AllCommentsComponent } from './component/all-comments/all-comments.component';
import { UserPostIdComponent } from './component/user-post-id/user-post-id.component';

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    AllPostsComponent,
    AllCommentsComponent,
    UserPostIdComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'posts', component: AllPostsComponent},
      {path: 'comments', component: AllCommentsComponent},
      {path: 'users', component: AllUsersComponent, children: [
        {path: 'posts/:id', component: UserPostIdComponent},

        ]


      },

      ])
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
