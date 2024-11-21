import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellerBooksComponent } from './best-seller-books.component';

describe('BestSellerBooksComponent', () => {
  let component: BestSellerBooksComponent;
  let fixture: ComponentFixture<BestSellerBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BestSellerBooksComponent]
    });
    fixture = TestBed.createComponent(BestSellerBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
