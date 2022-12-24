import { NgModule } from '@angular/core';
import { CryptoListComponent } from './crypto-list.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatListModule} from "@angular/material/list";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    imports: [
        MatGridListModule,
        MatListModule,
        NgForOf,
        AsyncPipe,
        NgIf,
        MatButtonModule
    ],
  declarations: [CryptoListComponent],
  providers: [],
  exports: [CryptoListComponent]
})
export class CryptoListComponentModule {
}
