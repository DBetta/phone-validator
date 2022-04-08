import { createAction, props } from "@ngrx/store";
import { Customer } from "../customer";

export const fetchCustomers = createAction("[Customers] fetch customers");
export const fetchCustomersSuccess = createAction(
  "[Customers] fetch customers success",
  props<{ payload: Customer[] }>()
);

export const updateCountryName = createAction(
  "[Customers] update customer country name",
  props<{ payload: string }>()
);
export const updatePhoneState = createAction(
    "[Customers] update customer phone state",
    props<{ payload: string }>()
  )
;
