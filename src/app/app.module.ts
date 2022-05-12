import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserGuard } from './core/guards/user.guard';
import { CustomHttpInterceptor } from './core/interceptors/custom-http-interceptor';
import { LoginModule } from './login/login.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';


const routes: Routes = [
  { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule)  },
  { path: 'management', loadChildren: () => import('./management/management.module').then(m => m.ManagementModule), canActivate: [UserGuard] },
  { path: '**', redirectTo: 'main'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    LoginModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
