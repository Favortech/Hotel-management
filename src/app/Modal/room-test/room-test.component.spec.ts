import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomTestComponent } from './room-test.component';

describe('RoomTestComponent', () => {
  let component: RoomTestComponent;
  let fixture: ComponentFixture<RoomTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
