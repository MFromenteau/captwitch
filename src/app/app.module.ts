import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StreamsDisplayerComponent } from './streams-displayer/streams-displayer.component';
import { StreamDisplayerComponent } from './stream-displayer/stream-displayer.component';

@NgModule({
  declarations: [
    AppComponent,
    StreamsDisplayerComponent,
    StreamDisplayerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
