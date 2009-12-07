# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_TerrorPak_session',
  :secret      => 'd5b9324dc08f8783be07f20b408d2c5901de265a9a037a4d4c1b63712ae97f8d97b38c8ed5e90bacbeba69e5c49a23849033cdd39d853fde47d78e49745894c6'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
