import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CustomerService } from "../customer.service";
import { fetchCustomers, fetchCustomersSuccess } from "./customer.actions";
import { map, mergeMap } from "rxjs";

@Injectable()
export class CustomerEffects {

  constructor(private actions$: Actions, private customerService: CustomerService) {
  }

  fetchCustomers$ = createEffect(() => this.actions$.pipe(
    ofType(fetchCustomers),
    mergeMap(_ => this.customerService.fetchCustomers() //
      .pipe(
        map(customers => fetchCustomersSuccess({ payload: customers }))
      ))
  ));
}
