import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CSMatFormsModule } from '@csnode/mat-forms';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import { RouterModule } from '@angular/router';
import { CmsCommonModule } from '../cms-common.module';
import { CheckPrintingComponent } from './check-printing.component';

@NgModule({
  declarations: [
    CheckPrintingComponent,
  ],
  imports: [
	CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild(),

    CSMatFormsModule.forChild(),

    RouterModule.forChild([{
      path: '',
      component: CheckPrintingComponent,
    }]),

    CmsCommonModule.forChild(),
  ],
  exports: [
    CheckPrintingComponent,
  ]
})
export class CheckPrintingModule { }
