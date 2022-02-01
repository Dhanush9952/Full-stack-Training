import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialButtonsComponent } from './material-buttons.component';
import { MatTabsModule } from '@angular/material/tabs' ;
import { MatIconModule } from '@angular/material/icon' ;
import { MatFormFieldModule } from '@angular/material/form-field' ;
import { MatSelectModule } from '@angular/material/select' ;

describe('MaterialButtonsComponent', () => {
  let component: MaterialButtonsComponent;
  let fixture: ComponentFixture<MaterialButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
