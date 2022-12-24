import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProductsListComponent } from './products-list.component';

@NgModule({
  imports: [MatGridListModule, MatListModule, CommonModule, MatButtonModule, MatIconModule],
  declarations: [ProductsListComponent],
  providers: [],
  exports: [ProductsListComponent]
})
export class ProductsListComponentModule {
}
