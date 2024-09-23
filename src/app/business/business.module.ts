import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import {BusinessRoutingModule} from "./business-routing.module";
import {SharedComponentsModule} from "../shared/shared-components/shared-components.module";
import { AllProductsComponent } from './all-products/all-products.component';
import {
  NgbAccordionBody,
  NgbAccordionButton, NgbAccordionCollapse,
  NgbAccordionDirective,
  NgbAccordionHeader,
  NgbAccordionItem, NgbNav, NgbNavContent, NgbNavItem, NgbNavLink, NgbNavLinkButton, NgbNavOutlet
} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [
    ProductsComponent,
    HomeComponent,
    AllProductsComponent
  ],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    SharedComponentsModule,
    NgbAccordionItem,
    NgbAccordionDirective,
    NgbAccordionHeader,
    NgbAccordionButton,
    NgbAccordionCollapse,
    NgbAccordionBody,
    NgbNav,
    NgbNavItem,
    NgbNavLink,
    NgbNavOutlet,
    NgbNavLinkButton,
    NgbNavContent
  ]
})
export class BusinessModule { }
