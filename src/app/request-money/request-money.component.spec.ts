import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RequestMoneyComponent } from './request-money.component';
import { TransactionService } from '../transaction.service'; // assuming this is the correct path
import { FormsModule } from '@angular/forms';

describe('RequestMoneyComponent', () => {
  let component: RequestMoneyComponent;
  let fixture: ComponentFixture<RequestMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [ RequestMoneyComponent ],
      providers: [TransactionService] // replace with correct service
    }).compileComponents();

    fixture = TestBed.createComponent(RequestMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});