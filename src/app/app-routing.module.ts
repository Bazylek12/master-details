import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductsListComponent} from './components/products-list/products-list.component';
import {CryptoListComponent} from './components/crypto-list/crypto-list.component';
import {EmployeeListComponent} from './components/employee-list/employee-list.component';
import {ProductsListComponentModule} from './components/products-list/products-list.component-module';
import {ProductsServiceModule} from './services/products.service-module';
import {CryptoListComponentModule} from './components/crypto-list/crypto-list.component-module';
import {CryptosServiceModule} from './services/cryptos.service-module';
import {EmployeeListComponentModule} from './components/employee-list/employee-list.component-module';
import {EmployeesServiceModule} from './services/employees.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{path: 'products-master-details', component: ProductsListComponent}, {
    path: 'crypto',
    component: CryptoListComponent
  }, {
    path: 'employees-master-details',
    component: EmployeeListComponent
  }]), ProductsListComponentModule, ProductsServiceModule, CryptoListComponentModule, CryptosServiceModule, EmployeeListComponentModule, EmployeesServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
