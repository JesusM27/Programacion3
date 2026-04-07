import { Component, OnInit } from '@angular/core';
import { tipoproducto } from 'src/app/Interface/user';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-tipoproducto',
  templateUrl: './tipoproducto.component.html',
  styleUrls: ['./tipoproducto.component.css']
})
export class TipoproductoComponent implements OnInit {

  TUser: any = [];
  user: tipoproducto = {
    idtpprod: null,
    idempresa: null,
    tipo: null,
    estado: 'Activo'
  }

  Empresalist: any;

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
    this.getDropListEmpresa();
  }

  getDropListEmpresa() {
    this.Data.getDropListEmpresa().subscribe((data: any) => {
      this.Empresalist = data;
    })
  }

  getUser() {
    this.Data.getAll('/tipoproducto')
      .subscribe(res => this.TUser = res, err => console.error(err));
  }

  AgregarValor() {
    delete this.user.idtpprod;
    this.Data.save(this.user, '/tipoproducto')
      .subscribe(() => this.getUser(), err => console.error(err));
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/tipoproducto')
      .subscribe(() => this.getUser(), err => console.error(err));
  }
}