import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BranchReleaseComponent } from './cms/branch-release/branch-release.component';
import { CheckPrintingComponent } from './cms/check-printing/check-printing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatInputModule} from '@angular/material/input'
import { ConfigService } from './services/config.service';
import { config } from 'process';
import { HttpClientModule } from '@angular/common/http';



export function configServiceFactory(config:ConfigService){
  return ()=>config.load();
}

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
    MatInputModule,
    HttpClientModule
  ],
  providers: [
    ConfigService,
    {
      provide:APP_INITIALIZER,
      useFactory:configServiceFactory,
      deps:[ConfigService],
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
