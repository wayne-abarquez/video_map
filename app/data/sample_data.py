from app import db
from app.auth_mod.models import User
from app.data.entities import users


class SampleData:
    @staticmethod
    def refresh_table(table_name):
        db.session.execute('TRUNCATE "' + table_name + '" RESTART IDENTITY CASCADE')
        db.session.commit()

    @staticmethod
    def generate_users():
        SampleData.load_users()


    @staticmethod
    def load_users():
        SampleData.refresh_table('user')

        user_list = []

        for data in users.test_users:
            u = User.from_dict(data)
            u.password = data['password'] if 'password' in data else users.test_password
            user_list.append(u)

        db.session.add_all(user_list)
        db.session.commit()
        print "Users Created"
