import { _emitNotification } from './Notifications';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.addEventListener('message', event => {
      _emitNotification(event.data);
    });
  });
}
