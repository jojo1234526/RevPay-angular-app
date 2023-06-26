import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TransactionComponent } from './transaction.component';
import { TransactionService } from '../transaction.service'; // assuming this is the correct path
import { FormsModule } from '@angular/forms';

describe('TransactionComponent', () => {
  let component: TransactionComponent;
  let fixture: ComponentFixture<TransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [ TransactionComponent ],
      providers: [TransactionService]
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
