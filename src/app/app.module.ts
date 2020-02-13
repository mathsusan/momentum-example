import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMomentumModule } from './app-momentum/app-momentum.module';
import { HomeComponent } from './pages/home/home.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { AppModalComponent } from './components/modal.component';
import { ModalService } from '@momentum-ui/angular';
import { Overlay, OverlayPositionBuilder,  ScrollStrategyOptions } from '@angular/cdk/overlay';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersPageComponent,
    AppModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMomentumModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ModalService, Overlay,  OverlayPositionBuilder,  ScrollStrategyOptions ],
  entryComponents: [AppModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
