import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeModel } from '../models/employee.model';
import { ApiResponse } from './api.response';
import { EmployeeResponse } from './employee.response';

@Injectable()
export class EmployeesService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>>('https://dummy.restapiexample.com/api/v1/employees').pipe(
      map((response: ApiResponse<EmployeeResponse[]>) => {
        return response.data.map((employeeResponse: EmployeeResponse) => {
          return {
            name: employeeResponse.employee_name,
            personalNumber: employeeResponse.id,
            img: employeeResponse.employee_image,
            salary: employeeResponse.employee_salary,
          }
        })
      })
    )
  }

  getOne(id: number): Observable<EmployeeModel> {
    return this._httpClient.get<ApiResponse<EmployeeResponse>>(`https://dummy.restapiexample.com/api/v1/employee/${id}`).pipe(
      map((res: ApiResponse<EmployeeResponse>)   => {
        return {
          name: res.data.employee_name,
          personalNumber: res.data.id,
          img: res.data.employee_image,
          salary: res.data.employee_salary,
        }
      })
    );
  }
}
