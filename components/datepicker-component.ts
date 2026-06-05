import { BaseComponent } from './baseComponent';

export class DatePicker extends BaseComponent {

  async selectDate(date: string) {
    await this.locator.fill(date);
  }

}