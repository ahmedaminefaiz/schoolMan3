import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { Pc2Component } from './pc2/pc2.component';
import { RouterModule } from '@angular/router';






@NgModule({
  declarations: [
    AppComponent,
    Pc2Component
  ],
  imports: [
    RouterModule,
    TableModule,
    TagModule,
    RatingModule,
    AvatarModule,
    FormsModule,
    TableModule,
    TagModule,
    ButtonModule,
    CalendarModule,
    SidebarModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AvatarModule,
    RatingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
