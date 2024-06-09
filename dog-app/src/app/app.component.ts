import { Component } from '@angular/core';
import { DogService } from './dog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dogImages: any[] = [];

  constructor(private dogService: DogService) { }
  ngOnInit() {
    this.getDog();
  }

  getDog() {
    this.dogService.getDog().subscribe(
      (data: any[]) => {
        this.dogImages = data;
      },
      (error) => {
          console.log('Erro ao buscar imagem de gato', error);
        }
    );
  }
}
