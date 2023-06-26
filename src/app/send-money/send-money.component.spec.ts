import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SendMoneyComponent } from './send-money.component';
import { TransactionService } from '../transaction.service'; // assuming this is the correct path
import { FormsModule } from '@angular/forms';

describe('SendMoneyComponent', () => {
  let component: SendMoneyComponent;
  let fixture: ComponentFixture<SendMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [ SendMoneyComponent ],
      providers: [TransactionService] // replace with correct service
    }).compileComponents();

    fixture = TestBed.createComponent(SendMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});