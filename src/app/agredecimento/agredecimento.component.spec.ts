import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgredecimentoComponent } from './agredecimento.component';

describe('AgredecimentoComponent', () => {
  let component: AgredecimentoComponent;
  let fixture: ComponentFixture<AgredecimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgredecimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgredecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
