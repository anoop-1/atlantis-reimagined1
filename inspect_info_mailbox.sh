echo '---INFO MAILBOX ROW---'
mysql -D vmail -sNe "SELECT username,maildir,storagebasedirectory,storagenode,transport,enabledeliver FROM mailbox WHERE username='info@atlantisndt.com';"
echo '---INFO FORWARDINGS EXACT---'
mysql -D vmail -sNe "SELECT id,address,forwarding,domain,dest_domain,is_forwarding,is_alias,active FROM forwardings WHERE address='info@atlantisndt.com' OR forwarding='info@atlantisndt.com' OR forwarding='anoop@atlantisinspection.com' OR forwarding LIKE '%anoop@atlantisinspection.com%' OR address LIKE '%info@atlantisndt.com%';"
echo '---ALIAS INFO---'
mysql -D vmail -sNe "SELECT * FROM alias WHERE address='info@atlantisndt.com';"
echo '---ALIAS_DOMAIN ALL---'
mysql -D vmail -sNe "SELECT * FROM alias_domain WHERE alias_domain='atlantisndt.com' OR target_domain='atlantisndt.com' LIMIT 100;"
echo '---RECIPIENT_BCC_USER INFO---'
mysql -D vmail -sNe "SELECT * FROM recipient_bcc_user WHERE username='info' AND domain='atlantisndt.com';"
echo '---RECIPIENT_BCC_DOMAIN ATLANTISNDT---'
mysql -D vmail -sNe "SELECT * FROM recipient_bcc_domain WHERE domain='atlantisndt.com';"
echo '---INFO MAILDIR EXISTENCE---'
maildir=$(mysql -D vmail -sNe "SELECT maildir FROM mailbox WHERE username='info@atlantisndt.com' LIMIT 1;")
if [ -n "$maildir" ]; then
  echo MAILDIR=$maildir
  ls -la /var/vmail/atlantisndt.com/$maildir || true
  find /var/vmail/atlantisndt.com/$maildir -maxdepth 3 \( -name '.forward' -o -name '.dovecot.sieve' -o -name 'dovecot.sieve' -o -name '*.sieve' \) 2>/dev/null | sort || true
  find /var/vmail/atlantisndt.com/$maildir -maxdepth 5 -type f | sed -n '1,100p'
else
  echo 'NO MAILDIR FOUND'
fi
