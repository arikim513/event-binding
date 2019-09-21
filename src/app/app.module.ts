import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ClickDirective } from './click.directive';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { HeroDetailComponent, BigHeroDetailComponent } from './hero-detail/hero-detail.component';
import { heroSwitchComponents } from './hero-switch.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { KeyupComponent, KeyUpComponent2, KeyUpComponent3, KeyUpComponent4, KeyUpComponent5 } from './keyup/keyup.component';
import { LoopBackComponent } from './loop-back/loop-back.component';
import { LittleTourComponent } from "./little-tour.component";

@NgModule({
  declarations: [
    AppComponent,
    ClickDirective,
    ItemDetailComponent,
    HeroDetailComponent,
    BigHeroDetailComponent,
    heroSwitchComponents,
    HeroFormComponent,
    KeyupComponent,
    KeyUpComponent2,
    KeyUpComponent3,
    KeyUpComponent4,
    KeyUpComponent5,
    LoopBackComponent,
    LittleTourComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
