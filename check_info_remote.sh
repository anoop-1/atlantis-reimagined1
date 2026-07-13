mysql -D vmail -sNe "SELECT source,destination FROM forwardings WHERE source='info@atlantisndt.com'" 
mysql -D vmail -sNe "SELECT username,maildir FROM mailbox WHERE username='info@atlantisndt.com'" 
postconf -n | grep -E "virtual_alias_maps|alias_maps|transport_maps|recipient_bcc_maps" 
grep -R 'info@atlantisndt.com' /etc/postfix /etc/dovecot 2>/dev/null | tail -n 100 
echo '---LOG---' 
grep -i 'info@atlantisndt.com' /var/log/maillog | tail -n 40
