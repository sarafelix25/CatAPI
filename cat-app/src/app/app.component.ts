import { Component } from '@angular/core';
import { CatService } from './cat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  catImages: any[] = [];

  constructor(private catService: CatService) { }
  ngOnInit() {
    this.getCat();
  }

  getCat() {
    this.catService.getCat().subscribe(
      (data: any[]) => {
        console.log(data)
        this.catImages = data;
      },
      (error) => {
          console.log('Erro ao buscar imagem de gato', error);
        }
    );
  }
}
