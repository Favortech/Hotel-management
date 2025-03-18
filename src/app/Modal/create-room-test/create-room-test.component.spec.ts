import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRoomTestComponent } from './create-room-test.component';

describe('CreateRoomTestComponent', () => {
  let component: CreateRoomTestComponent;
  let fixture: ComponentFixture<CreateRoomTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRoomTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRoomTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
