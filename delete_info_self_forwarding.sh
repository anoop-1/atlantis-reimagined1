mysql -D vmail -sNe "DELETE FROM forwardings WHERE id=6;"
mysql -D vmail -sNe "SELECT id,address,forwarding,active FROM forwardings WHERE address='info@atlantisndt.com' OR forwarding='info@atlantisndt.com' OR forwarding='anoop@atlantisinspection.com';"
