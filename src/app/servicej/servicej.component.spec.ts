import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicejComponent } from './servicej.component';

describe('ServicejComponent', () => {
  let component: ServicejComponent;
  let fixture: ComponentFixture<ServicejComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicejComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicejComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
