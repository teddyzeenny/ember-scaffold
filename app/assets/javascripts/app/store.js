App.Store = DS.Store.extend({
  revision: 12,
  adapter: 'DS.FixtureAdapter'
});

DS.FixtureAdapter.reopen({
  queryFixtures: function(fixtures, query, type) {
    return fixtures;
  }
});