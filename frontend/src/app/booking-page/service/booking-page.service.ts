import { Injectable } from '@angular/core';
import { ClientiService } from '../../interfaces/clienti/clienti.service';
import { Observable } from 'rxjs';
import { Clienti } from '../../interfaces/clienti/clienti';

@Injectable({providedIn: 'root'})

export class BookingPageService {

  constructor(private clientiService : ClientiService) {}

  public addClienti(clienti: Clienti) : Observable<Clienti> {
    return this.clientiService.addClienti(clienti);
  }
  
}
