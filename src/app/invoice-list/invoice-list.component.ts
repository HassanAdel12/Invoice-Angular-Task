import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvoiceService } from '../Services/invoice.service';

@Component({
  selector: 'app-invoice-list',
  standalone: true,
  imports: [],
  providers: [InvoiceService],
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.css'
})
export class InvoiceListComponent implements OnInit {

  invoices: any[] = [];

  constructor( private invoiceService:InvoiceService,private router: Router) { }

  ngOnInit() {
      this.invoiceService.getInvoices().subscribe(data => {
        this.invoices = data;
      });
  }

  onInvoiceDetails(invoice: any) {
    this.router.navigate(['/invoices', invoice.id]);
  }

}
