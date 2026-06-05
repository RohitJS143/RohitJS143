import { BaseComponent } from './baseComponent';

export class Checkbox extends BaseComponent {

  async check() {
    await this.locator.check();
  }

  async uncheck() {
    await this.locator.uncheck();
  }

  async isChecked() {
    return await this.locator.isChecked();
  }

}