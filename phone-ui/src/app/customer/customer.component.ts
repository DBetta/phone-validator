import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { CustomerService } from "./customer.service";
import { Observable, Subject, takeUntil } from "rxjs";
import { MatTableDataSource } from "@angular/material/table";
import { Customer } from "./customer";
import { MatPaginator } from "@angular/material/paginator";
import { Store } from "@ngrx/store";
import { fetchCustomers, updateCountryName, updatePhoneState } from "./+state/customer.actions";
import { CustomerState, selectCountries, selectCustomers, selectPhoneStates } from "./+state/customer.selector";

@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.css"]
})
export class CustomerComponent implements OnInit, AfterViewInit, OnDestroy {

  private readonly destroyed$: Subject<void> = new Subject<void>();

  public readonly dataSource: MatTableDataSource<Customer> = new MatTableDataSource<Customer>();
  public readonly displayedColumns = ["customerName", "countryName", "phoneState", "phone"];

  public readonly countries$ = this.store.select(selectCountries);
  public readonly phoneStates$ = this.store.select(selectPhoneStates);

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(private store: Store<CustomerState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(fetchCustomers());

    this.store.select(selectCustomers)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(customers => {
        this.dataSource.data = customers;
      });
  }

  ngAfterViewInit() {
    if (this.paginator != null) {
      this.dataSource.paginator = this.paginator;
    }
  }

  onSelectCountry(country: string) {
    this.store.dispatch(updateCountryName({ payload: country }));
  }

  onSelectPhoneState(phoneState: string) {
    this.store.dispatch(updatePhoneState({ payload: phoneState }));
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
