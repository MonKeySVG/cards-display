import {Component, QueryList, ViewChildren} from '@angular/core';
import {CardComponent} from "./card/card.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cards-display';

  @ViewChildren(CardComponent) cards!: QueryList<CardComponent>;

  flipAllCards() {
    this.cards.forEach(card => {
      card.flip();
    });
  }

  flipAllToFront() {
    this.cards.forEach(card => {
      card.flipToFront();
    });
  }

  flipAllToBack() {
    this.cards.forEach(card => {
      card.flipToBack();
    });
  }
}
