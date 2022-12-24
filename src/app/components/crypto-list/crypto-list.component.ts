import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CryptoModel } from '../../models/crypto.model';
import { CryptosService } from '../../services/cryptos.service';

@Component({
  selector: 'app-crypto-list',
  styleUrls: ['./crypto-list.component.scss'],
  templateUrl: './crypto-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoListComponent {
  readonly cryptoList$: Observable<CryptoModel[]> = this._cryptosService.getAll();
  private _cryptoPriceSubject: Subject<string> = new Subject<string>();
  public cryptoPrice$: Observable<string> = this._cryptoPriceSubject.asObservable();

  constructor(private _cryptosService: CryptosService) {
  }

  getPrice(price: string): void {
    this._cryptoPriceSubject.next(price);
  }
}
