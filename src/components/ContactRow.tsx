import type { Contact } from '../types/contact';

interface ContactRowProps {
	contact: Contact;
}

function ContactRow({ contact }: ContactRowProps) {
	return (
		<tr>
			<td>{contact.id}</td>
			<td>{contact.name}</td>
			<td>{contact.email}</td>
		</tr>
	);
}

export default ContactRow;
