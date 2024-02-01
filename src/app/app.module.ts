import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { InfoPersonalComponent } from './component/info-personal/info-personal.component';
import { PlanComponent } from './component/plan/plan.component';
import { AddOnsComponent } from './component/add-ons/add-ons.component';
import { SummaryComponent } from './component/summary/summary.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InfoPersonalComponent,
    PlanComponent,
    AddOnsComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
