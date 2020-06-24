import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BranchReleaseComponent } from './cms/branch-release/branch-release.component';
import { CheckPrintingComponent } from './cms/check-printing/check-printing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatInputModule} from '@angular/material/input'

@NgModule({
  declarations: [
    AppComponent,
    BranchReleaseComponent,
    CheckPrintingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
