import { BaseComponent, Component } from '../component.js';
import { Composable } from '../page/page.js';

type OnCloseListener = () => void;
type OnSubmitListener = () => void;

export class InputDialog
  extends BaseComponent<HTMLElement>
  implements Composable
{
  closeListener?: OnCloseListener;
  submitListener?: OnSubmitListener;

  constructor() {
    super(`<section class="dialog">
            <div class="dialog__overlay"></div>
            <div class="modal__total">
              <div class="modal__head">
                <button class="close">x</button>
              </div>
              <div class="modal__body">
              </div>
              <div class="modal__footer">
                <button class="dialog__submit">Add</button>
              </div>
            </div> // dialog__total
          </section>`);
    const closeBtn = this.element.querySelector('.close')! as HTMLElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };
    const submitBtn = this.element.querySelector('.dialog__submit')! as HTMLElement;
    submitBtn.onclick = () => {
      this.submitListener && this.submitListener();
    };
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
  setOnSubmitListener(listener: OnSubmitListener) {
    this.submitListener = listener;
  }

  addChild(child: Component) {
    const body = this.element.querySelector('.modal__body')! as HTMLElement;
    child.attachTo(body);
  }
}
