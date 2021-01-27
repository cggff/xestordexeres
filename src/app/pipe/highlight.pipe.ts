import { Pipe, PipeTransform } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser'

@Pipe({ name: 'highlight' })
export class HighlightPipe implements PipeTransform {

    // transform(value: any, args: any): any {
    //     if (!args) {
    //         return value;
    //     }
    //     debugger;
    //     var re = new RegExp(args, 'gi');
    //     return value.replace(re, "<mark>$&</mark>");
    // }

    constructor(private sanitizer: DomSanitizer) { }

    transform(value: any, args: any): any {
        if (!args) {
            return value;
        }
        // Match in a case insensitive maneer
        const re = new RegExp(args, 'gi');
        const match = value.match(re);

        // If there's no match, just return the original value.
        if (!match) {
            return value;
        }

        const result = value.replace(re, "<mark>" + match[0] + "</mark>");
        return this.sanitizer.bypassSecurityTrustHtml(result);
    }

}