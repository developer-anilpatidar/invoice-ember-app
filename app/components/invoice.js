import Component from '@ember/component';
import { alias } from '@ember/object/computed';

export default Component.extend({
  tagName: 'tr',

  amount: alias('invoice.amount'),
  date: alias('invoice.date'),
  id: alias('invoice.id'),

  actions: {
    changeEditMode() {
      this.set('editMode',true);
    },

    updateInvoice() {
      this.get('invoice').save().then(() => {
        this.set('editMode',false);
      });
    },

    destroy() {
      let confirmation = confirm('Are you sure?');

      if(confirmation) {
        this.get('invoice').destroyRecord();
      }
    }
  }
});
