import ExelComponent from './../../core/ExelComponent';
import { createTable } from './table.template';

class Table extends ExelComponent {
  static className = 'exel__table';

  toHTML() {
    return createTable(20);
  }
}

export default Table;
