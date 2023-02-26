import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RemoteComponent } from './remote/remote.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent},
  { path: 'remote', component: RemoteComponent},
  { path: 'results', component: ResultsComponent},

  { path: '**', component: AuthComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
