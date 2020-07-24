import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CSMatFormsModule } from '@csnode/mat-forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CSMatFormsModule.forChild()
  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CSMatFormsModule
  ],
  entryComponents: [
  ]
})
export class CmsCommonModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CmsCommonModule,
      providers: [
      ]
    };
  }
  public static forChild(): ModuleWithProviders {
    return {
      ngModule: CmsCommonModule,
      providers: []
    };
  }


}
