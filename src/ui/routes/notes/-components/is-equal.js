import Ember from 'ember';
export const helper = Ember.Helper.helper(function([lhs, rhs]) {
  return lhs === rhs;
});
