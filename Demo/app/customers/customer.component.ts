import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Customer } from './customer';

@Component({
    selector: 'my-signup',
    templateUrl: './app/customers/customer.component.html'
})
export class CustomerComponent  {
    customer: Customer= new Customer();
    customerForm: FormGroup

    save() {
        console.log(this.customerForm);
        console.log('Saved: ' + JSON.stringify(customerForm.value));
    }
 }
