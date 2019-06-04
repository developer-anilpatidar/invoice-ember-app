import Controller from '@ember/controller';

export default Controller.extend({
  responseMessage: null,

  actions: {
    saveInvoice() {
      let newInvoice = this.store.createRecord('invoice', {
          amount: this.get('amount'),
          date: this.get('date')
      });

      newInvoice.save().then((response) => {
        this.set('responseMessage', 'Invoice created successfully');
        this.set('amount', null);
        this.set('date', null);
      })

      setTimeout(() => {
        this.set('responseMessage', null);
      }, 2000);
    }
  }
});
