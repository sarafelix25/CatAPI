import { Component } from '@angular/core';
import { DogService } from './dog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  catImages: any[] = [];

  constructor(private dogService: DogService) { }
  ngOnInit() {
    this.getCat();
  }

  getCat() {
    this.dogService.getCat().subscribe(
      (data: any[]) => {
        this.catImages = data;
      },
      (error) => {
          console.log('Erro ao buscar imagem de gato', error);
        }
    );
  }
}
