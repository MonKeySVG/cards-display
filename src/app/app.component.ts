import {Component, QueryList, ViewChildren} from '@angular/core';
import {CardComponent} from "./card/card.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cards-display';
  cardsColor: number[] = [0, 1, 2, 3];

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

  randomizeCards() {
    // Generate an array the size of the number of cards
    // with random numbers from 0 to 3
     this.cardsColor = Array.from({length: this.cards.length}, () => Math.floor(Math.random() * 4));
  }

  protected readonly toString = toString;
}
