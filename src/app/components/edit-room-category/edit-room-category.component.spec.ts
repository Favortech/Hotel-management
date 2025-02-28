import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRoomCategoryComponent } from './edit-room-category.component';

describe('EditRoomCategoryComponent', () => {
  let component: EditRoomCategoryComponent;
  let fixture: ComponentFixture<EditRoomCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditRoomCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRoomCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
