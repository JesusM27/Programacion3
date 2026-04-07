import { Component, OnInit } from '@angular/core';
import { areas_trabajo } from 'src/app/Interface/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-areas-trabajo',
  templateUrl: './areas-trabajo.component.html',
  styleUrls: ['./areas-trabajo.component.css']
})
export class AreasTrabajoComponent implements OnInit {

  TUser: any = [];
  user: areas_trabajo = {
    idarea: null,
    idempresa: null,
    idsuc: null,
    area: null,
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
    this.Data.getDropListEmpresa().subscribe((data:any)=>{
      this.Empresalist=data;
    })
  }

  getDropListSucursales() {
    this.Data.getDropListSucursales().subscribe((data:any)=>{
      this.Sucursallist=data;
    })
  }

  getUser() {
    this.Data.getAll('/areas_trabajo')
      .subscribe(res => this.TUser = res, err => console.error(err));
  }

  AgregarValor(){
    delete this.user.idarea;
    this.Data.save(this.user,'/areas_trabajo')
      .subscribe(() => this.getUser(), err => console.error(err));
  }

  EliminarData(id: number){
    this.Data.delete(id, '/areas_trabajo')
      .subscribe(() => this.getUser(), err => console.error(err));
  }
}