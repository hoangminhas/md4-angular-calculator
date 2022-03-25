import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  popUp(val) {
    document.getElementById('text').value += val;
  }

  res3t() {
    document.getElementById('text').value = '';
  }

  calculate() {
    let equation = document.getElementById('text').value;
    document.getElementById('text').value = eval(equation);
  }

}
