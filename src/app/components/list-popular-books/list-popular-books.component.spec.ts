import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPopularBooksComponent } from './list-popular-books.component';

describe('PopularBooksComponent', () => {
  let component: ListPopularBooksComponent;
  let fixture: ComponentFixture<ListPopularBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPopularBooksComponent]
    });
    fixture = TestBed.createComponent(ListPopularBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
