import { Component, OnInit } from '@angular/core';
import { empleados } from 'src/app/Interface/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  TUser: any = [];
  user: empleados = {
    idemp: null,
    idempresa: null,
    idsuc: null,
    idarea: null,
    identidad: null,
    fecha_nac: null,
    nombres: null,
    apellidos: null,
    sexo: null,
    estado_civil: null,
    direccion: null,
    fecha_creacion: null
  }

  Empresalist: any;
  Sucursallist: any;
  Arealist: any;

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
    this.getDropListEmpresa();
    this.getDropListSucursales();
    this.getDropListAreas();
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

  getDropListAreas() {
    this.Data.getDropListAreas().subscribe((data: any) => {
      this.Arealist = data;
    })
  }

  getUser() {
    this.Data.getAll('/empleados')
      .subscribe(res => this.TUser = res, err => console.error(err));
  }

  AgregarValor() {
    delete this.user.idemp;
    this.Data.save(this.user, '/empleados')
      .subscribe(() => this.getUser(), err => console.error(err));
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/empleados')
      .subscribe(() => this.getUser(), err => console.error(err));
  }
}