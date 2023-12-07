import { Component, NgZone } from '@angular/core';
import { CatsService } from 'src/app/services/cats.service';

@Component({
  selector: 'app-lista-cats-component',
  templateUrl: './lista-cats-component.component.html',
  styleUrls: ['./lista-cats-component.component.css']
})
export class ListaCatsComponentComponent {

  listCats: any = []

  constructor(private catsService : CatsService,
    private ngZone : NgZone){}

    ngOnInit(){
      this.loadCats()
    }
  
    loadCats(){
      this.catsService.getCats().subscribe((data)=>{
        this.listCats = data;
      })
      
    }

}
