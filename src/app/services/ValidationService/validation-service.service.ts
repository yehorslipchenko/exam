import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationServiceService {

  validate(data: string){
    return true;
  }
  constructor() { }
}
