import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({ 
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent {
    submit(login: any){
        console.log("Form Submitted !",login)
      }
    
      email = new FormControl('', [Validators.required, Validators.email]);
      getErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';          
      }
}