import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestModalComponent } from './test-modal/test-modal.component';
import { ModalService } from '@momentum-ui/angular';
import { Overlay } from '@angular/cdk/overlay';
import { AppMomentumModule } from '../app-momentum/app-momentum.module';
import { Routes, RouterModule } from '@angular/router';
import { StartstepComponent } from './modal-steps/startstep/startstep.component';
import { Step1Component } from './modal-steps/step1/step1.component';
import { Step2Component } from './modal-steps/step2/step2.component';

const modalRoutes: Routes = [
  { path: '', component: StartstepComponent, outlet: 'modal' },
  { path: 'step1', component: Step1Component,  outlet: 'modal'},
  { path: 'step2', component: Step2Component,  outlet: 'modal' },
];

@NgModule({
  declarations: [
    TestModalComponent,
    StartstepComponent,
    Step1Component,
    Step2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMomentumModule,
    RouterModule.forChild(modalRoutes),
  ],
  entryComponents: [TestModalComponent],
  providers: [ModalService, Overlay ]
})
export class TestModalModule { }
