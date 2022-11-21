import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAlticciSequenceComponent } from './search-alticci-sequence.component';

describe('SearchAlticciSequenceComponent', () => {
  let component: SearchAlticciSequenceComponent;
  let fixture: ComponentFixture<SearchAlticciSequenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAlticciSequenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAlticciSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
