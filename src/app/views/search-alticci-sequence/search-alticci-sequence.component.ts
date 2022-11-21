import { sequence } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { SearchAlticciSequenceService } from './services/search-alticci-sequence.service';

@Component({
  selector: 'app-search-alticci-sequence',
  templateUrl: './search-alticci-sequence.component.html',
  styleUrls: ['./search-alticci-sequence.component.scss']
})
export class SearchAlticciSequenceComponent implements OnInit {

  public sequenceNumberSearch: number;
  public sequenceNumberResult: bigint;
  public errorMessage: string;

  constructor(
    private searchAlticcSequenceService: SearchAlticciSequenceService
  ) { }

  ngOnInit(): void { }

  public search(): void {
    if(this.sequenceNumberSearch) {
      this.searchAlticcSequenceService.search(this.sequenceNumberSearch)
      .subscribe((sequenceValue) => {
        this.sequenceNumberResult = sequenceValue;
        this.errorMessage = null;
      }, (error) => {
        if(error.status === 500) {
          this.errorMessage = error.message;
        }
      });
    }
  }

}
