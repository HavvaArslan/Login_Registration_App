import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './Login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
