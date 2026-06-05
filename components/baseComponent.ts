import { Locator } from '@playwright/test';

export class BaseComponent {

  protected locator: Locator;

  constructor(locator: Locator) {
    this.locator = locator;
  }

  async isVisible() {
    return await this.locator.isVisible();
  }

  async click() {
    await this.locator.click();
  }

}