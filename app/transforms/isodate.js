import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized, options) {
    return serialized;
  },

  serialize(deserialized, options) {
    return deserialized;
  }
});
