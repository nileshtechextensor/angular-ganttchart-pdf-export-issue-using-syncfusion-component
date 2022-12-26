import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GanttModule} from '@syncfusion/ej2-angular-gantt';
import { ToolbarService, PdfExportService, SelectionService } from '@syncfusion/ej2-angular-gantt';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GanttModule
  ],
  providers: [ToolbarService, PdfExportService, SelectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
