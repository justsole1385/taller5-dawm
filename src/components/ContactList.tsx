import type { Contact } from '../types/contact';
import ContactRow from './ContactRow';

export const contacts: Contact[] = [
	{ id: 1, name: 'María López', email: 'maria@example.com' },
	{ id: 2, name: 'Carlos Ruiz', email: 'carlos@example.com' },
	// ... Ana Gómez, Luis Fernández
];

function ContactList() {
	return (
		<table className="table table-striped table-sm">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Nombre</th>
					<th scope="col">Email</th>
				</tr>
			</thead>
			<tbody>
				{contacts.map((contact) => (
					<ContactRow key={contact.id} contact={contact} />
				))}
			</tbody>
		</table>
	);
}

export default ContactList;

