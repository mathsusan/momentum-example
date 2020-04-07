import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMomentumModule } from './app-momentum/app-momentum.module';
import { HomeComponent } from './pages/home/home.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { ModalService } from '@momentum-ui/angular';
import { Overlay } from '@angular/cdk/overlay';
import { TestModalComponent } from './components/test-modal/test-modal.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { ModalStepsComponent } from './components/modal-steps/modal-steps.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersPageComponent,
    TestModalComponent,
    ModalStepsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMomentumModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    })
  ],
  providers: [ModalService, Overlay ],
  entryComponents: [TestModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
