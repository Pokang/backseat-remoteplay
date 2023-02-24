import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import { RemoteComponent } from './remote/remote.component';
import { SteambannerComponent } from './steambanner/steambanner.component';
import { ResultsComponent } from './results/results.component';
import { PlaybuttonComponent } from './playbutton/playbutton.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AuthComponent,
    RemoteComponent,
    SteambannerComponent,
    ResultsComponent,
    PlaybuttonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
