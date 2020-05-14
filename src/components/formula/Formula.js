import ExelComponent from './../../core/ExelComponent';

class Formula extends ExelComponent {
  static className = 'exel__formula';

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click'],
    });
  }

  toHTML() {
    return `<div class="info">fx</div>
      <div class="input" contenteditable="true" spellcheck="false"></div>`;
  }

  onInput(event) {
    console.log('Formula: onInput', event);
  }

  onClick() {
    console.log('click');
  }
}

export default Formula;
