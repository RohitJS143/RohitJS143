import { BaseComponent } from './baseComponent';

export class Dropdown extends BaseComponent {

  async selectOption(value: string) {
    await this.locator.selectOption(value);
  }

  async getSelectedValue() {
    return await this.locator.inputValue();
  }

}