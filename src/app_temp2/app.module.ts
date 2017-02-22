import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WorkersListComponent } from './workers-list/workers-list.component';
import { WorkerDetailsComponent } from './worker-details/worker-details.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkersListComponent,
    WorkerDetailsComponent
  ],
  imports: [
    BrowserModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
