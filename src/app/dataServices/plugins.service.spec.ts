import { TestBed, inject } from '@angular/core/testing';

import { PluginsService } from './plugins.service';

describe('PluginsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PluginsService]
    });
  });

  it('should ...', inject([PluginsService], (service: PluginsService) => {
    expect(service).toBeTruthy();
  }));
});
