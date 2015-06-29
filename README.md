# Bootstrap Rails Devise Marionette App

Rails web application with Devise authentication, Marionette client and Bootstrap styling.

## Screenshot

![alt tag](https://raw.githubusercontent.com/logicalicy/bootstrap-rails-devise-marionette/master/Screenshot.png)

## Installation

You'll need:
- [Ruby on Rails](http://guides.rubyonrails.org/getting_started.html)
- [PostgreSQL](http://www.postgresql.org/)
- [git](http://git-scm.com/)

## Quickstart

1. Install [PostgreSQL](http://www.postgresql.org/) and take note of your db credentials.
2. Initialise database: `initdb /path/to/postgres/data` (e.g. `/usr/local/var/postgres/data`)
3. Start database: `pg_ctl -D /path/to/postgres/data -l /usr/local/var/postgres/log/postgres.log start`
4. Clone repository: `git clone git@github.com:logicalicy/bootstrap-rails-devise-marionette.git`
5. Go to directory: `cd bootstrap-rails-devise-marionette`
6. Export database credentials you took note of in Step #1: `export POSTGRES_USERNAME=exampleuser` and `export POSTGRES_PASSWORD=examplepassword`
7. Create database: `rake db:create`
8. Run migration: `rake db:migrate`
9. Run server: `rails server`
10. Go to `http://localhost:3000`

## Contributing

TODO: Write about contributing.

## History

TODO: Write about history

## License

See [LICENSE](LICENSE) file.