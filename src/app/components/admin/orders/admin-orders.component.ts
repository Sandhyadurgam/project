import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';


@Component({
    selector: 'app-admin-orders',
    templateUrl: './admin-orders.component.html',
    styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
    adminOrders: Order[] = [];
    presentPage: number = 1;
    constructor(public service: OrderService) { }
    ngOnInit(): void {
        this.loadData();
    }
    loadData() {
        this.service.getAdminOrders()
            .subscribe(response => {
                this.adminOrders = response.map((data) => {
                    return {
                        id: data.payload.doc.id,
                        ...data.payload.doc.data() as Order
                    }
                });

            })
    }
}

