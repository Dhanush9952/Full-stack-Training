import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { BootstrapTutorialComponent } from './bootstrap-tutorial/bootstrap-tutorial.component';
import { CheckboxesComponent } from './Angular-Tutorial/checkboxes/checkboxes.component';
import { MaterialTableComponent } from './Angular-Tutorial/material-table/material-table.component' ;
import { AppMaterialModule } from "./app.material-module";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { GreetingsComponent } from './Angular-Tutorial/greetings/greetings.component';
import { CarComponent } from './Angular-Tutorial/car/car.component';
import { MaterialButtonsComponent } from './materialbutton/material-buttons.component';
import { FormsComponent } from './Angular-Tutorial/forms/forms.component';

import { NavComponent } from './nav/nav.component';
import { ParentComponent } from './Component-Interaction/parent/parent.component';
import { ChildComponent } from './Component-Interaction/child/child.component';
import { VoterComponent } from './Component-Interaction/voter.component';
import { VoteTakerComponent } from './Component-Interaction/votetaker.component';

import { HomeComponent } from './Home';
import { LoginComponent } from './Login';
import { RegisterComponent } from './Register';
import { appRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { TimeService } from './Angular-Tutorial/time.service';

import { AccountService } from './_services/account.service'



@NgModule({
  declarations: [
    AppComponent,
    BootstrapTutorialComponent,
    CheckboxesComponent,
    MaterialTableComponent,
    GreetingsComponent,
    CarComponent,
    ButtonsComponent,
    MaterialButtonsComponent,
    FormsComponent,
    NavComponent,
    ParentComponent,
    ChildComponent,
    VoterComponent,
    VoteTakerComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,

    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    appRoutingModule,
    HttpClientModule

  ],
  providers: [TimeService,AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }

