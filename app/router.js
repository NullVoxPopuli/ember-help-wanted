import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('items');
  this.route('issues',  { path: '/' }, function() {
    this.route('core');
    this.route('learning');
  });
});

export default Router;
