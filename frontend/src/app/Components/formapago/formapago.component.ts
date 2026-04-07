import { Component, OnInit } from '@angular/core';
import { formapago } from 'src/app/Interface/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-formapago',
  templateUrl: './formapago.component.html',
  styleUrls: ['./formapago.component.css']
})
export class FormapagoComponent implements OnInit {

  TUser: any = [];
  user: formapago = {
    idfpago: null,
    idempresa: null,
    formapago: null,
    estado: 'Activo'
  }

  Empresalist: any;

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
    this.getDropListEmpresa(); // <-- Conexión inicializada
  }

  // Método para obtener la lista de empresas (Foreign Key)
  getDropListEmpresa() {
    this.Data.getDropListEmpresa().subscribe((data: any) => {
      this.Empresalist = data;
    });
  }

  getUser() {
    this.Data.getAll('/formapago')
      .subscribe(res => this.TUser = res, err => console.error(err));
  }

  AgregarValor() {
    delete this.user.idfpago;
    this.Data.save(this.user, '/formapago')
      .subscribe(() => this.getUser(), err => console.error(err));
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/formapago')
      .subscribe(() => this.getUser(), err => console.error(err));
  }
}