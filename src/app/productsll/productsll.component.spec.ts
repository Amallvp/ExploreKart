import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsllComponent } from './productsll.component';

describe('ProductsllComponent', () => {
  let component: ProductsllComponent;
  let fixture: ComponentFixture<ProductsllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsllComponent]
    });
    fixture = TestBed.createComponent(ProductsllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
