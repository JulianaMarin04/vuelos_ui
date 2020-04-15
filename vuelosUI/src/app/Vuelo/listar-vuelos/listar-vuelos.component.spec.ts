import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVuelosComponent } from './listar-vuelos.component';

describe('ListarVuelosComponent', () => {
  let component: ListarVuelosComponent;
  let fixture: ComponentFixture<ListarVuelosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarVuelosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
