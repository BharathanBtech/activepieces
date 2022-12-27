import {createComponent} from '../../framework/piece';
import { createHubspotContact } from './actions/create-contact/create-contact.action';


export const hubspot = createComponent({
	name: 'hubspot',
	displayName: "Hubspot",
	logoUrl: 'https://cdn.activepieces.com/components/hubspot/logo.png',
	actions: [createHubspotContact],
	triggers: [],
});
