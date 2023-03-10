import { BaseComponent } from '../../component.js';
import { MediaData } from '../dialog.js';

export class MediaSectionInput
  extends BaseComponent<HTMLElement>
  implements MediaData
{
  constructor() {
    super(`<div>
              <div class="form__container">
                <label for="title" class="form__label">Title</label>
                <input type="text" id="title" class="form__input" />
              </div>
              <div class="form__container">
                <label for="body" class="form__label">URL</label>
                <input type="text" id="url" class="form__input" />
              </div>
            </div>`);
  }
  get title(): string {
    const element = this.element.querySelector('#title')! as HTMLInputElement;
    return element.value;
  }
  get url(): string {
    const element = this.element.querySelector('#url')! as HTMLInputElement;
    return element.value;
  }
}
