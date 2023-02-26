import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RemoteComponent } from './remote/remote.component';

const routes: Routes = [
  { path: 'auth-component', component: AuthComponent},
  { path: 'remote-component', component: RemoteComponent},

  { path: '**', component: AuthComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
