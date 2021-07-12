import { Pipe, PipeTransform } from '@angular/core';
import * as Fuse from 'fuse.js';

@Pipe({
  name: 'fuzzySearch'
})
export class FuzzySearchPipe implements PipeTransform {

  transform(value: any, searchWord?: any ): any {

    const options = {
      includeScore: false,
      keys: ['name'],
    };
    const fuse = new Fuse(value, options);

    if (!searchWord) {
      return value;
    }
    const results = fuse.search(searchWord);
    return results;
  }
}
