import { Component, OnInit } from '@angular/core';
import { MediaService } from '../service/media.service';


@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  datosSize: any[]= [];
  datosHours: any[]= [];

  constructor(private miServicio: MediaService) { }

  ngOnInit(): void {
    this.miServicio.getDatosSize().subscribe((data) => {
      this.datosSize = data.size;
      console.log("SIZE",this.datosSize);
      this.calcularMediaYDesviacion(this.datosSize, 'tamaño');
    });

    this.miServicio.getDatosHours().subscribe((data) => {
      this.datosHours = data.hours;
      console.log("HOURS",this.datosHours);
      this.calcularMediaYDesviacion(this.datosHours, 'horas');
    });
  }

  calcularMediaYDesviacion(datos: number[], nombre: string): void {
    // Calcular la media (promedio)
    const suma = datos.reduce((acumulador, valor) => acumulador + valor, 0);
    const media = suma / datos.length;

    // Calcular la desviación estándar
    const diferenciaCuadrado = datos.map((valor) => Math.pow(valor - media, 2));
    const sumaDiferenciaCuadrado = diferenciaCuadrado.reduce((acumulador, valor) => acumulador + valor, 0);
    const desviacionEstandar = Math.sqrt(sumaDiferenciaCuadrado / datos.length);

    console.log(`Media de ${nombre}: ${media}`);
    console.log(`Desviación estándar de ${nombre}: ${desviacionEstandar}`);
  }
}
