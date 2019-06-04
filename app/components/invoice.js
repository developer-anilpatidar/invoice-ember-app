import Component from '@ember/component';
import { alias } from '@ember/object/computed';

export default Component.extend({
  tagName: 'tr',

  amount: alias('invoice.amount'),
  date: alias('invoice.date'),
  id: alias('invoice.id'),
});
