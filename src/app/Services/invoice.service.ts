import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private apiUrlGetList = 'https://localhost:44327/api/InvoiceDetails/GetAll'; 

  constructor(private http: HttpClient) { }

  getInvoices(): Observable<any[]> {
      return this.http.get<any[]>(this.apiUrlGetList);
  }
}
