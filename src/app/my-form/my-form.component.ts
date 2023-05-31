import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup, FormArray, FormBuilder} from "@angular/forms";
import {Model} from "./Class/Model";

import {Validators} from "@angular/forms";
import {ValidationServiceService} from "../services/ValidationService/validation-service.service";

import {AlertController} from "@ionic/angular";


@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss'],
})
export class MyFormComponent  implements OnInit {
  @Output() modelAdd: EventEmitter<Model> = new EventEmitter<Model>();

  modelForm!: FormGroup;
  model!: Model;
  alertController!: AlertController;

  constructor(private fb: FormBuilder) {
    this.modelForm = this.fb.group({
      modelName: ['', [Validators.required]],
      modelBrand: ['', [Validators.required]],
      modelArr: new FormArray([new FormControl()]),
      });
  }

  addIntoArr(){
    console.log("Added into array.");
    (this.modelForm.controls['modelArr'] as FormArray).push(
      new FormControl()
    )
  }

  removeFromArr(i:any){
    console.log("Removed from array.");
    (this.modelForm.controls['modelArr'] as FormArray).removeAt(i);
  }

  getControls(){
    return (this.modelForm.get('modelArr') as FormArray).controls;
  }

  onSubmit(){
    let name = this.modelForm.value.modelName;
    let brand = this.modelForm.value.modelBrand;
    let arr = this.modelForm.value.modelArr;

    let validationService = new ValidationServiceService();

    if (validationService.validate(name)){
      this.model = new Model(name, brand, arr);
      console.log('Submitted!');
      console.log(this.model);
      this.modelAdd.emit(this.model);
    }else{
      console.log('Validation Error')
    }

    this.modelForm.reset();
  }

  ngOnInit() {}

}
