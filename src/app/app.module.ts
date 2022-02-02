import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table'

import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs' ;
import { MatIconModule } from '@angular/material/icon' ;
import { MatFormFieldModule } from '@angular/material/form-field' ;
import { MatSelectModule } from '@angular/material/select';
import { BootstrapTutorialComponent } from './bootstrap-tutorial/bootstrap-tutorial.component';
import { CheckboxesComponent } from './Angular-Tutorial/checkboxes/checkboxes.component';
import { MaterialTableComponent } from './Angular-Tutorial/material-table/material-table.component' ;
import { AppMaterialModule } from "./app.material-module";
@NgModule({
  declarations: [
    AppComponent,
    BootstrapTutorialComponent,
    CheckboxesComponent,
    MaterialTableComponent,

    
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
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

