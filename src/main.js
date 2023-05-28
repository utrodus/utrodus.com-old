// Import main css
import "~/assets/style/index.scss";

// Import default layout so we don't need to import it to every page
import DefaultLayout from "~/layouts/Default.vue";
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function(Vue, { head }) {
	// Set default layout as a global component
	Vue.component("Layout", DefaultLayout);
	if (process.isClient) {
		const Tawk = require("@tawk.to/tawk-messenger-vue-3").default;

	 // Register the Tawk component
	 Vue.use(Tawk, {
		 propertyId : '6472a32774285f0ec46e01c4',
    	 widgetId : '1h1fsqktn'
	  })
}
}