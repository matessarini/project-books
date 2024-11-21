import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellBooksComponent } from './sell-books.component';

describe('SellBooksComponent', () => {
  let component: SellBooksComponent;
  let fixture: ComponentFixture<SellBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellBooksComponent]
    });
    fixture = TestBed.createComponent(SellBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
