import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaCatsComponentComponent } from './components/lista-cats-component/lista-cats-component.component';
import { CatsService } from './services/cats.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaCatsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [CatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
