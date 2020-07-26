import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CSMatFormsModule } from '@csnode/mat-forms';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import { RouterModule } from '@angular/router';
import { BranchReleaseComponent } from './branch-release.component';
import { CmsCommonModule } from '../cms-common.module';

@NgModule({
  declarations: [
    BranchReleaseComponent,
  ],
  imports: [
	CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild(),

    CSMatFormsModule.forChild(),

    RouterModule.forChild([{
      path: '',
      component: BranchReleaseComponent,
    }]),

    CmsCommonModule.forChild(),
  ],
  exports: [
    BranchReleaseComponent,
  ]
})
export class BranchReleaseModule { }
