import type { Contact } from '../types/contact';
import { Link } from 'react-router';

interface ContactRowProps {
	contact: Contact;
}

function ContactRow({ contact }: ContactRowProps) {
	return (
		<tr>
			<td>{contact.id}</td>
			<td>
				<Link
					to={`/contactos/${contact.id}`}
					className="link-primary link-underline-opacity-0 link-underline-opacity-75-hover"
				>
					{contact.name}
				</Link>
			</td>
			<td>{contact.email}</td>
		</tr>
	);
}

export default ContactRow;
