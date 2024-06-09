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

  getCat() {}
}
