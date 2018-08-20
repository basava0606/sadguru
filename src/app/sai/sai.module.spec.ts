import { SaiModule } from './sai.module';

describe('SaiModule', () => {
  let saiModule: SaiModule;

  beforeEach(() => {
    saiModule = new SaiModule();
  });

  it('should create an instance', () => {
    expect(saiModule).toBeTruthy();
  });
});
