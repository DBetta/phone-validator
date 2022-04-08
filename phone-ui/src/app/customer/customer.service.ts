import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Customer } from "./customer";

@Injectable({
  providedIn: "root"
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  /**
   * Fetch all customers
   */
  fetchCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>("/api/customers");
  }
}
