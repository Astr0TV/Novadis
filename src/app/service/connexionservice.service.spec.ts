import { TestBed } from '@angular/core/testing';

import { ConnexionserviceService } from './connexionservice.service';

describe('ConnexionserviceService', () => {
  let service: ConnexionserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnexionserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
