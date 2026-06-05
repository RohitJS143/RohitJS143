import { BaseComponent } from "./baseComponent";

export class TextBox extends BaseComponent {

  async enterValue(value: string) {
    await this.locator.fill(value);
  }

  async clear() {
    await this.locator.clear();
  }

  async getValue() {
    return await this.locator.inputValue();
  }

}