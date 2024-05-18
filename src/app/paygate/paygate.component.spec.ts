import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaygateComponent } from './paygate.component';

describe('PaygateComponent', () => {
  let component: PaygateComponent;
  let fixture: ComponentFixture<PaygateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaygateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaygateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
