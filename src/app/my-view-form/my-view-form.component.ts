import { Component, OnInit } from '@angular/core';
import {Model} from "../my-form/Class/Model";

@Component({
  selector: 'app-my-view-form',
  templateUrl: './my-view-form.component.html',
  styleUrls: ['./my-view-form.component.scss'],
})
export class MyViewFormComponent  implements OnInit {
  models: Model[] = [];
  constructor() { }

  addModel(event: any){
    if (event as Model){
      let model: Model = event;
      this.models.push(model);
    }else{
      throw new Error('Type Error!')
    }
  }

  ngOnInit() {}

}
