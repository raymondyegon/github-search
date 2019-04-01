import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GitsearchService } from './github-service/github.service';



import { AppComponent } from './app.component';
import { GitsearchComponent } from './search-navbar/search-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    GitsearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GitsearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 