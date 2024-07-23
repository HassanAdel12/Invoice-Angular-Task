import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice-details',
  standalone: true,
  imports: [],
  templateUrl: './invoice-details.component.html',
  styleUrl: './invoice-details.component.css'
})
export class InvoiceDetailsComponent  implements OnInit {

  invoiceId: number = 0;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      this.invoiceId = id !== null ? +id : 0; // Convert string to number, provide a default value if null
      console.log(this.invoiceId);
    });
  }
}