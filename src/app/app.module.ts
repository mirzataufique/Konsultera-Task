import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DynamicFormComponent } from './Layout/dynamic-form/dynamic-form.component';
import { DataTableComponent } from './Layout/data-table/data-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { YoutubePlayerComponent } from './Layout/youtube-player/youtube-player.component';
import { YouTubePlayerModule } from "@angular/youtube-player";
@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DataTableComponent,
    YoutubePlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
