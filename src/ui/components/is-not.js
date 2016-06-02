import Ember from 'ember';
export const helper = Ember.Helper.helper(function([value]) {
  return !value;
});
