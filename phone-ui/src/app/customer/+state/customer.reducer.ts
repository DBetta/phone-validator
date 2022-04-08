import { Customer } from "../customer";
import { createReducer, on } from "@ngrx/store";
import { fetchCustomers, fetchCustomersSuccess, updateCountryName, updatePhoneState } from "./customer.actions";

export interface State {
  customers: Customer[];
  customerCountry: string | null;
  phoneState: string | null;
}

const initialState: State = {
  customers: [],
  customerCountry: null,
  phoneState: null
};

export const customerFeatureKey = "customer";

export const customerReducer = createReducer(
  initialState,

  on(fetchCustomersSuccess, (state, { payload }) => {
    return { ...state, customers: payload };
  }),

  on(updatePhoneState, (state, { payload }) => {
    return { ...state, phoneState: payload };
  }),

  on(updateCountryName, (state, { payload }) => {
    return { ...state, customerCountry: payload };
  })
);
