import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationServiceService {

  validate(data: number){
    if (data > 0 && data <=100){
      return true;
    }else{
      return false;
    }
  }
  constructor() { }
}
