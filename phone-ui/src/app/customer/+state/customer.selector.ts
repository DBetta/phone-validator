import * as customerReducer from "./customer.reducer";
import { createSelector } from "@ngrx/store";

export interface CustomerState {
  [customerReducer.customerFeatureKey]: customerReducer.State;
}


const selectFeature = (state: CustomerState) => state[customerReducer.customerFeatureKey];

const getCustomer = (state: customerReducer.State) => {
  return state.customers.filter(customer => {
    const containsPhoneState = state.phoneState !== null ? customer.phoneState.toLowerCase() === state.phoneState.toLowerCase() : true;
    const containsCountryName = (state.customerCountry != null) ? customer.countryName === state.customerCountry : true;

    return containsPhoneState && containsCountryName;
  });
};

export const selectCustomers = createSelector(
  selectFeature,
  getCustomer
);

export const selectCountries = createSelector(
  selectFeature,
  ({ customers }) => [...new Set(customers.map(customer => customer.countryName))]
);

export const selectPhoneStates = createSelector(
  selectFeature,
  ({ customers }) => [...new Set(customers.map(customer => customer.phoneState.toLowerCase()))]
);
