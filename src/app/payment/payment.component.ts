import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  constructor() { }

  onlick(){
    alert("Thank you!! Your order has been submit successful");
    window.history.back();
  }
}
