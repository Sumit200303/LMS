import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApporveUserComponent } from './apporve-user.component';

describe('ApporveUserComponent', () => {
  let component: ApporveUserComponent;
  let fixture: ComponentFixture<ApporveUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApporveUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApporveUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
