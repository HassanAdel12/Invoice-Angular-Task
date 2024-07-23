import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router'; // Import RouterModule


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor( private route:Router) { }

  ngOnInit() {
  }

  OpenList(){
    this.route.navigate(['/InvoiceList']);
  }
  onInvoiceDetails(invoice: any) {
    this.route.navigate(['/invoices', invoice]);
  }
}
