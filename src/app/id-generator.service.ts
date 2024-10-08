import { IdGenerator } from './id-generator';
import { Injectable } from '@angular/core';

// Доработайте этот код
@Injectable({
  providedIn: 'root',
})
export class IdGeneratorService extends IdGenerator {
  private id = 0;

  override generate(): number {
    return ++this.id;
  }
}
