from app import app
from app import db
from flask.ext.script import Manager, prompt_bool
from flask.ext.migrate import Migrate, MigrateCommand
from app.auth_mod import models

manager = Manager(app)
migrate = Migrate(app, db)

manager.add_command('db', MigrateCommand)


@manager.command
def initdb():
    db.create_all()
    print "Initialized the Database"


@manager.command
def dropdb():
    if prompt_bool("Are you sure you want to Drop your Database?"):
        db.drop_all()
        print "Database Dropped"


@manager.command
def create_test_users():
    u = models.User()
    u.username = 'navagis'
    u.password = 'realAugData'
    db.session.add(u)
    db.session.commit()
    print "Created test user"


@manager.command
def create_admin_user():
    u = models.User()
    u.username = 'admin'
    u.password = 'password123'
    db.session.add(u)
    db.session.commit()
    print "Created Navagis user"


if __name__ == '__main__':
    manager.run()