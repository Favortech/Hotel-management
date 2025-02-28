import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRoomCategoryComponent } from './create-room-category.component';

describe('CreateRoomCategoryComponent', () => {
  let component: CreateRoomCategoryComponent;
  let fixture: ComponentFixture<CreateRoomCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRoomCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRoomCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
