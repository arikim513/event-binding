import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSwitchComponent } from './hero-switch.component';

describe('HeroSwitchComponent', () => {
  let component: HeroSwitchComponent;
  let fixture: ComponentFixture<HeroSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
