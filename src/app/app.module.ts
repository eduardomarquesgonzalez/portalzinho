import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './views/header/header.component';
import { CgmComponent } from './views/cgm/cgm.component';
import { GlossarioComponent } from './views/glossario/glossario.component';
import { HomeComponent } from './views/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './views/footer/footer.component';
import { ComecoComponent } from './views/comeco/comeco.component';
import {MatCardModule} from '@angular/material/card';
import { JogosComponent } from './views/jogos/jogos.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CgmComponent,
    GlossarioComponent,
    HomeComponent,
    FooterComponent,
    ComecoComponent,
    JogosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
