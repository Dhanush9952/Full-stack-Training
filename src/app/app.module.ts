import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs' ;
import { MatIconModule } from '@angular/material/icon' ;
import { MatFormFieldModule } from '@angular/material/form-field' ;
import { MatSelectModule } from '@angular/material/select';
import { BootstrapTutorialComponent } from './bootstrap-tutorial/bootstrap-tutorial.component';
import { CheckboxesComponent } from './Angular-Tutorial/checkboxes/checkboxes.component';
import { MaterialTableComponent } from './Angular-Tutorial/material-table/material-table.component' ;
import { AppMaterialModule } from "./app.material-module";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { GreetingsComponent } from './Angular-Tutorial/greetings/greetings.component';
import { CarComponent } from './Angular-Tutorial/car/car.component';
import { MaterialButtonsComponent } from './materialbutton/material-buttons.component';
import { FormsComponent } from './Angular-Tutorial/forms/forms.component';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

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
    FormsComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatIconModule,
    AppMaterialModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatRadioModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

