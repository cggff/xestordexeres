import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.css' ]
})
export class SearchComponent implements OnInit {

    text: string;

    @Output()
    searchText = new EventEmitter<string>();

    taskFormControl = new FormControl('', [
    ]);

    ngOnInit() {
        this.text = "";
    }

    search() {
        this.searchText.emit(this.text);
    }

}
