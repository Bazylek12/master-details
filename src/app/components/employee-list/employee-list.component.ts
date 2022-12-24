import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employee-list',
  styleUrls: ['./employee-list.component.scss'],
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent {
  readonly list$: Observable<EmployeeModel[]> = this._employeesService.getAll();
  private _detailsSubject: Subject<number> = new Subject<number>();
  public details$: Observable<number> = this._detailsSubject.asObservable();
  readonly salaryDetail$: Observable<EmployeeModel> = this.details$.pipe(
    switchMap(data => this._employeesService.getOne(data)));

  constructor(private _employeesService: EmployeesService) {
  }

  showSalary(salary: number): void {
    this._detailsSubject.next(salary);
  }
}
