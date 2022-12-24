import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { ProductsListComponentModule } from './components/products-list/products-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CryptoListComponentModule } from './components/crypto-list/crypto-list.component-module';
import { CryptosServiceModule } from './services/cryptos.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductsListComponent }, { path: 'crypto', component: CryptoListComponent }]), ProductsListComponentModule, ProductsServiceModule, CryptoListComponentModule, CryptosServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
