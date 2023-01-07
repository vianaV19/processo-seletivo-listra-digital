import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/service/car.service';
import { Car } from 'src/app/models/Car';

@Component({
  selector: 'listra-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  carsService: CarsService;

  carsList: Car[] = []

  response!: any;

  total!:number;

  seen:number = 0
  
  not_seen!:number

  constructor(private carService: CarsService) {
    this.carsService = carService;
  }
  ngOnInit(): void {
    this.carsService.retrieveAll().subscribe(data => {
      this.response = data
      this.total = this.response.resultados.total
      let cars:any[] = this.response.resultados.data

      for(let i = 0; i < cars.length; i++){
        let car:Car = new Car();
        
        car.cambio = cars[i].vco_cambio.titulo
        car.int_anomodelofabricacao = cars[i].int_anomodelofabricacao
        car.int_versao = cars[i].int_versao
        car.int_preco_cliente = cars[i].int_preco_cliente
        car.loja_cidade = cars[i].loja_cidade
        car.marca_titulo = cars[i].marca_titulo
        car.modelo_titulo = cars[i].modelo_titulo
        car.imagem_url = cars[i].vco_veiculos_foto.url_medium
        car.int_quilometragem = cars[i].int_quilometragem
        car.visible = i <= 7 ? true : false
        this.seen += i <= 7 ? 1 : 0

        this.carsList[i] = car
      }

      this.not_seen = this.total - this.seen;
    }
    );
  }

}
