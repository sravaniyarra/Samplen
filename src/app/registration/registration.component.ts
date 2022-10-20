import { AnimationBuilder } from '@angular/animations';
import { Component, OnInit, ɵflushModuleScopingQueueAsMuchAsPossible } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  testForm= new FormGroup({
    add : new FormArray(
      [
        new FormControl(null,Validators.required)
      ]
    )
  })
  addd(){
    let addi= this.testForm.get('add') as FormArray
    addi.push(new FormControl(null,Validators.required))
  }
}
