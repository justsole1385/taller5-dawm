import type { Contact } from '../types/contact'
import ContactRow from './ContactRow'

interface ContactListProps {
	contacts: Contact[]
}

function ContactList({ contacts }: ContactListProps) {
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
