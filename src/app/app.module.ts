import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMomentumModule } from './app-momentum/app-momentum.module';
import { HomeComponent } from './pages/home/home.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { TestModalModule } from './test-modal/test-modal.module';
import { DndDirective } from './dragNdrop/dnd.directive';
import { DndComponent } from './dragNdrop/dnd/dnd.component';
import { NumberAddComponent } from './number-add/number-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersPageComponent,
    DndDirective,
    DndComponent,
    NumberAddComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppMomentumModule,
    TestModalModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
