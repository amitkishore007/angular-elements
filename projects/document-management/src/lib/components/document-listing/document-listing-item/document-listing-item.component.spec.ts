import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentListingItemComponent } from './document-listing-item.component';

describe('DocumentListingItemComponent', () => {
  let component: DocumentListingItemComponent;
  let fixture: ComponentFixture<DocumentListingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentListingItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentListingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
