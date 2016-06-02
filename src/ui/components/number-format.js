import Ember from 'ember';
import NumberFormat from 'hospitalrun/mixins/number-format';

var NumberHandler = Ember.Object.extend(NumberFormat);
export const helper = Ember.Helper.helper(function([number]) {
  var numberHandler = new NumberHandler();
  return numberHandler._numberFormat(number);
});
