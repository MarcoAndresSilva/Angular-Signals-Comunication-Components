import { Injectable, signal} from '@angular/core';

@Injectable({providedIn: 'root'})

export class CountService {

  private _count = signal(0);
  count = this._count.asReadonly();
  constructor() { }

  get signal() {
    return this._count.asReadonly();
  }

  add() {
    this._count.update((c) => c + 1);
  }

  sub() {
    this._count.update((c) => c - 1);
  }
}
