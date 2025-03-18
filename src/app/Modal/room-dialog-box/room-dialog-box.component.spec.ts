import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDialogBoxComponent } from './room-dialog-box.component';

describe('RoomDialogBoxComponent', () => {
  let component: RoomDialogBoxComponent;
  let fixture: ComponentFixture<RoomDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomDialogBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
