import { bootstrapApplication } from '@angular/platform-browser';
import { CustomerListComponent } from './app/customer-list/customer-list.component';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';

bootstrapApplication(CustomerListComponent, {
  providers: [importProvidersFrom(FormsModule)]
}).catch(err => console.error(err));