import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRoomDialogComponent } from './view-room-dialog.component';

describe('ViewRoomDialogComponent', () => {
  let component: ViewRoomDialogComponent;
  let fixture: ComponentFixture<ViewRoomDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewRoomDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRoomDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
