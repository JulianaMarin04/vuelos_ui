import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAllComponent } from './listar-all.component';

describe('ListarAllComponent', () => {
  let component: ListarAllComponent;
  let fixture: ComponentFixture<ListarAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
