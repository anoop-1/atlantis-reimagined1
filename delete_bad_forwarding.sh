mysql -D vmail -sNe "DELETE FROM forwardings WHERE id=13;"
mysql -D vmail -sNe "SELECT id,address,forwarding,active FROM forwardings WHERE address='info@atlantisndt.com' OR forwarding LIKE '%anoop@atlantisinspection.com%';"
