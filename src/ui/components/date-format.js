import Ember from 'ember';
export const helper = Ember.Helper.helper(function(params, hash) {
  if (!Ember.isEmpty(params[0])) {
    var dateFormat = 'l';
    let date = params[0];
    if (hash && hash.format) {
      dateFormat = hash.format;
    }
    return moment(date).format(dateFormat);
  }
});
