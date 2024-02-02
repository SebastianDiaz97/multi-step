import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'multi-step-angular';

  paso: number = 1

  cambiarPaso(pasos: number){
    this.paso = pasos;
  }

  planSelected(info: []){
    console.log(info);
  }
}
