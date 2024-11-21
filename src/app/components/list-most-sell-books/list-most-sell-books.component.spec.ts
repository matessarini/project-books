import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSellBooksComponent } from './list-most-sell-books.component';

describe('ListSellBooksComponent', () => {
  let component: ListSellBooksComponent;
  let fixture: ComponentFixture<ListSellBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSellBooksComponent]
    });
    fixture = TestBed.createComponent(ListSellBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
