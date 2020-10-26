import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './component/app.component';
import {HttpClientModule} from '@angular/common/http';
import { AllUsersComponent } from './component/all-users/all-users.component';
import {RouterModule} from '@angular/router';
import { UserComponent } from './component/user/user.component';
import { AllPostsComponent } from './component/all-posts/all-posts.component';
import { AllCommentsComponent } from './component/all-comments/all-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    UserComponent,
    AllPostsComponent,
    AllCommentsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'posts', component: AllPostsComponent},
      {path: 'comments', component: AllCommentsComponent},
      {path: 'users', component: AllUsersComponent, children: [
        {path: 'posts/:id', component: UserComponent},

        ]


      },

      ])
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
