import { NgModule, Injector } from '@angular/core';
import { DocumentListingComponent } from './components/document-listing/document-listing.component';
import { DocumentListingItemComponent } from './components/document-listing/document-listing-item/document-listing-item.component';
import { DocumentFilterComponent } from './components/document-filter/document-filter.component';
import { DocumentManagementComponent } from './components/document-management/document-management.component';

import {createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [DocumentListingComponent, DocumentListingItemComponent, DocumentFilterComponent, DocumentManagementComponent],
  imports: [
  ],
  exports: [],
  entryComponents:[
    DocumentManagementComponent
  ]
})
export class DocumentManagementModule {

    constructor(private injector: Injector) {
      const element = createCustomElement(DocumentManagementComponent, { injector:this.injector });
      customElements.define('document-management', element);
    }


}
