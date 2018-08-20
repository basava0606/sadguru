import { ShankarModule } from './shankar.module';

describe('ShankarModule', () => {
  let shankarModule: ShankarModule;

  beforeEach(() => {
    shankarModule = new ShankarModule();
  });

  it('should create an instance', () => {
    expect(shankarModule).toBeTruthy();
  });
});
