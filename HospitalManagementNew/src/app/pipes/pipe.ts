import { Pipe, PipeTransform } from '@angular/core';
import { Clinician } from '../model/clinician';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {


    transform(items: any[], filter: Object): any {
        if (!items || !filter) {
            return items;
        }
       console.log(filter)
        return items.filter(item => item.fullName.indexOf(filter) !== -1);
    }
    
}

