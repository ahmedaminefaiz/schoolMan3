import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pc2Component } from './pc2.component';

describe('Pc2Component', () => {
  let component: Pc2Component;
  let fixture: ComponentFixture<Pc2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Pc2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
