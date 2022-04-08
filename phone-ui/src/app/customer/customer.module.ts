import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CustomerRoutingModule } from "./customer-routing.module";
import { CustomerComponent } from "./customer.component";
import { HttpClientModule } from "@angular/common/http";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { StoreModule } from "@ngrx/store";
import { customerFeatureKey, customerReducer } from "./+state/customer.reducer";
import { EffectsModule } from "@ngrx/effects";
import { CustomerEffects } from "./+state/customer.effects";


@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,

    StoreModule.forFeature(customerFeatureKey, customerReducer),
    EffectsModule.forFeature([CustomerEffects])
  ]
})
export class CustomerModule {
}
