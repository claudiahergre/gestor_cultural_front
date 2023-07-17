import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarsalaComponent } from './editarsala.component';

describe('EditarsalaComponent', () => {
  let component: EditarsalaComponent;
  let fixture: ComponentFixture<EditarsalaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarsalaComponent]
    });
    fixture = TestBed.createComponent(EditarsalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
