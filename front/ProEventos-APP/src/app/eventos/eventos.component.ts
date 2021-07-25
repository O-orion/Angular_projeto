import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any;

  //http é injetada pelo angular
  constructor(private http: HttpClient) { }

  ngOnInit(): void { //método que é chamado antes de inicializar a apalicação
    this.getEventos();

  }

  public getEventos(): void {
    this.http.get('https://localhost:5001/api/evento').subscribe(
      response => this.eventos = response,
      error => console.log(error)
    ); // está criando um observable, que está consultando a api e o que ele recuperar está alocando na nossa variavel

    /*this.eventos = [
      {
        Tema: 'JESUS VOLTARÁ',
        Local: 'TERRA'
      },
      {
        Tema: 'JULGAMENTO DAS NAÇÕES',
        Local: 'Vale de Josafa'
      },
      {
        Tema: 'JESUS MEU SENHOR',
        Local: 'meu coração'
      },
      {
        Tema: 'JESUS GOVERNA',
        Local: 'Monte Sião'
      }
    //]*/

  }

}
