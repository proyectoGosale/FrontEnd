import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasxCobrarComponent } from './cuentasx-cobrar.component';

describe('CuentasxCobrarComponent', () => {
  let component: CuentasxCobrarComponent;
  let fixture: ComponentFixture<CuentasxCobrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentasxCobrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasxCobrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
