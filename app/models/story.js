import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  title: DS.attr(),
  cover_image: DS.attr(),
  preview: DS.attr(),
  article: DS.attr()
});
