import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// Component
import { ReportComponent } from "./report/report.component";

// import HttpClientModule
import { HttpClientModule } from "@angular/common/http";

// AngularMaterialModuleModule
import { AngularMaterialModuleModule } from "./angular-material-module.module";

@NgModule({
  declarations: [AppComponent, ReportComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
