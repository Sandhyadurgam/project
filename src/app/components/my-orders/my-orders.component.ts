import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  myOrders: Order[] = [];
  presentPage: number = 1;

  constructor(public service: OrderService) { }
  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    let userId = localStorage.getItem('loggedInUserId');

    this.service.getUserOrders(userId!)
      .subscribe(response => {
        this.myOrders = response.map((data) => {
          return {
            id: data.payload.doc.id,
            ...data.payload.doc.data() as Order
          }
        });
      })
  }
}