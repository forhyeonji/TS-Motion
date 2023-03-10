import { BaseComponent } from '../../component.js';
import { TextData } from '../dialog.js';

export class TextSectionInput
  extends BaseComponent<HTMLElement>
  implements TextData
{
  constructor() {
    super(`<div>
             <div class="form__container">
               <label for="title" class="form__label">Title</label>
               <input type="text" id="title" class="form__input" />
             </div>
             <div class="form__container">
               <label for="body" class="form__label">Body</label>
               <textarea type="text" row="3" id="body" class="form_textarea"></textarea>
             </div>
           </div>`);
  }
  get title(): string {
    const element = this.element.querySelector('#title')! as HTMLInputElement;
    return element.value;
  }
  get body(): string {
    const element = this.element.querySelector('#body')! as HTMLInputElement;
    return element.value;
  }
}
