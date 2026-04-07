import { Component, OnInit } from '@angular/core';
import { clientes } from 'src/app/Interface/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  TUser: any = [];
  user: clientes = {
    num_clie: null,
    idempresa: null,
    idsuc: null,
    identidad: null,
    rtn: null,
    fecha_nac: null,
    nombre: null,
    telefono: null,
    direccion: null,
    correo: null,
    fecha_creacion: null,
    estado: 'Activo'
  }

  Empresalist: any;
  Sucursallist: any;

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
    this.getDropListEmpresa();
    this.getDropListSucursales();
  }

  getDropListEmpresa() {
    this.Data.getDropListEmpresa().subscribe((data: any) => {
      this.Empresalist = data;
    })
  }

  getDropListSucursales() {
    this.Data.getDropListSucursales().subscribe((data: any) => {
      this.Sucursallist = data;
    })
  }

  getUser() {
    this.Data.getAll('/clientes')
      .subscribe(res => this.TUser = res, err => console.error(err));
  }

  AgregarValor() {
    delete this.user.num_clie;
    this.Data.save(this.user, '/clientes')
      .subscribe(() => this.getUser(), err => console.error(err));
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/clientes')
      .subscribe(() => this.getUser(), err => console.error(err));
  }
}