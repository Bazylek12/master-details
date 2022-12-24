import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  styleUrls: ['./products-list.component.scss'],
  templateUrl: './products-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListComponent {
  readonly productList$: Observable<ProductModel[]> = this._productsService.getAll();
  private _detailsSubject: Subject<number> = new Subject<number>();
  public details$: Observable<number> = this._detailsSubject.asObservable();
  readonly detailsList$: Observable<ProductModel> = this.details$.pipe(switchMap(data => this._productsService.getOne(data)));

  constructor(private _productsService: ProductsService) {
  }
  selectProduct (id: number) : void {
    this._detailsSubject.next(id);
  }
}
