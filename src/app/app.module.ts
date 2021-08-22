import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraComponent } from './public/barra/barra.component';
import { ContentComponent } from './public/content/content.component';
import { ReactiveFormsModule} from "@angular/forms";
import { MoveBarComponent } from './public/move-bar/move-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    ContentComponent,
    MoveBarComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
