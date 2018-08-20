import { GodModule } from './god.module';

describe('GodModule', () => {
  let godModule: GodModule;

  beforeEach(() => {
    godModule = new GodModule();
  });

  it('should create an instance', () => {
    expect(godModule).toBeTruthy();
  });
});
