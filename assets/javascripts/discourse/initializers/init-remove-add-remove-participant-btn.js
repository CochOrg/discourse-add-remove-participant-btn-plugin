import {withPluginApi} from "discourse/lib/plugin-api";

export default {
  name: 'init-remove-add-remove-participant-btn',

  initialize(container) {
    withPluginApi("0.12.1", (api) => {
      api.onPageChange((url, title) => {
        const newPrivateMessageButtons = document.querySelectorAll('.add-remove-participant-btn');
        newPrivateMessageButtons.forEach(btn => {
          btn.remove();
        });
      });
    });
  }
};
