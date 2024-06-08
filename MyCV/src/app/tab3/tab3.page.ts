import { Component, OnInit, ViewChild } from '@angular/core';
import { InfiniteScrollCustomEvent, IonInfiniteScroll } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll!: IonInfiniteScroll;

  items: any[] = [];
  page = 1;
  limit = 20;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.cargarDatos();
    this.generateItems();
  }

  cargarDatos(event?: any) {
    this.apiService.getData(this.page, this.limit).subscribe(
      data => {
        this.items = this.items.concat(data);
        this.page++;

        if (event) {
          event.target.complete();
          if (data.length < this.limit) {
            event.target.disabled = true;
          }
        }
      },
      error => {
        console.error('Error al cargar datos', error);
        if (event) {
          event.target.complete();
        }
      }
    );
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Item ${count + i}`);
    }
  }

  onIonInfinite(ev?:any) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
}
