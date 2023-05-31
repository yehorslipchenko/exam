export class Model {
  model_name: string = "";
  brand: string = "";

  arr: string[] = [];

  constructor(model_name: string, brand: string, arr: string []) {
    this.model_name = model_name;
    this.brand = brand;
    this.arr = arr;
  }
}
