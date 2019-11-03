import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentBbComponent } from './components/component-b/component-bb/component-bb.component';
import { ComponentBaComponent } from './components/component-b/component-ba/component-ba.component';
import { ComponentAbComponent } from './components/component-a/component-ab/component-ab.component';
import { ComponentAaComponent } from './components/component-a/component-aa/component-aa.component';
import { ComponentBComponent } from './components/component-b/component-b.component';
import { ComponentAComponent } from './components/component-a/component-a.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentAComponent,
    ComponentBComponent,
    ComponentAaComponent,
    ComponentAbComponent,
    ComponentBaComponent,
    ComponentBbComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
