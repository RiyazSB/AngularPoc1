import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any;

  Array.prototype.multiply = function(num) {
    let i;
    for(i = 0; i< this.length; i++) {
      this[i] = this[i] * num;
    }
  };

  constructor() { }



  ngOnInit() {

    this.products = [
      {
      'index': 1,
      'name': 'Jack',
      'surname': 'Cooper',
      'fullname': 'Melinda Ball',
      'email': 'marguerite@craven.pk',
      'bool': true
      },
      {
      'index': 2,
      'name': 'Norman',
      'surname': 'Johnston',
      'fullname': 'Cathy O',
      'email': 'billy@rice.sj',
      'bool': true
      },
      {
      'index': 3,
      'name': 'Edgar',
      'surname': 'Klein',
      'fullname': 'Sidney Gross',
      'email': 'shannon@carter.kr',
      'bool': true
      },
      {
      'index': 4,
      'name': 'Darlene',
      'surname': 'Rowland',
      'fullname': 'Elisabeth Harmon',
      'email': 'gary@schroeder.cg',
      'bool': true
      },
      {
      'index': 5,
      'name': 'Cynthia',
      'surname': 'Friedman',
      'fullname': 'Martin Horn',
      'email': 'miriam@underwood.sk',
      'bool': true
      },
      {
      'index': 6,
      'name': 'Vivian',
      'surname': 'Fisher',
      'fullname': 'Erika Harper',
      'email': 'scott@stanley.bm',
      'bool': false
      },
      {
      'index': 7,
      'name': 'Marlene',
      'surname': 'Kaplan',
      'fullname': 'Janet Diaz',
      'email': 'martin@love.sx',
      'bool': true
      },
      {
      'index': 8,
      'name': 'Dorothy',
      'surname': 'Nguyen',
      'fullname': 'Harriet Harmon',
      'email': 'lois@sullivan.net',
      'bool': true
      },
      {
      'index': 9,
      'name': 'Guy',
      'surname': 'Morris',
      'fullname': 'Gloria Moore',
      'email': 'judith@stone.cf',
      'bool': true
      },
      {
      'index': 10,
      'name': 'Leslie',
      'surname': 'Bruce',
      'fullname': 'Lois Callahan',
      'email': 'sara@parsons.ba',
      'bool': true
      }
      ];

      let a = [1, 2, 3, 4, 5, 6, 7];
      let b = a.map(this.double);
      console.log(b);
      console.log(a.multiply(4));
  }



  double(value, index, array) {
    return value * 2;
  }
}
