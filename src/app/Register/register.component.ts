import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({ 
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css'] 
})

export class RegisterComponent {

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