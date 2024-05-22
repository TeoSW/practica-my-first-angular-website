import { Component, OnInit } from '@angular/core';
import { ClientiService } from '../interfaces/clienti/clienti.service';
import { Clienti } from '../interfaces/clienti/clienti';
import { response } from 'express';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{

    public clienti: Clienti[] | undefined;


    constructor(private clientiService: ClientiService){}

    ngOnInit(): void {
        this.getClienti();
    }

    public getClienti():void{
      this.clientiService.getClienti().subscribe(
        (response: Clienti[]) => {
          this.clienti = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
}
