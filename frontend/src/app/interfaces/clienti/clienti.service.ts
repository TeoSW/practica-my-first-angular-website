import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clienti } from './clienti';

@Injectable({providedIn: 'root'})

export class ClientiService {

  private url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getClienti() : Observable<Clienti[]>{
    return this.http.get<Clienti[]>(`${this.url}/clienti/all`)
  }

  public addClienti(clienti: Clienti) : Observable<Clienti>{
    return this.http.post<Clienti>(`${this.url}/clienti/add`, clienti)
  }

  public updateClienti(clienti: Clienti) : Observable<Clienti>{
    return this.http.put<Clienti>(`${this.url}/clienti/update`, clienti)
  }

  public deleteClienti(nameClient: string) : Observable<void>{
    return this.http.delete<void>(`${this.url}/clienti/delete/${nameClient}`)
  }
  
}
