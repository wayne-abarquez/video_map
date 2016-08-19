from app import db
from app.models import BaseModel
from flask.ext.login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash


class User(BaseModel, UserMixin):
    username = db.Column(db.String(50), nullable=False)
    password_hash = db.Column(db.String, nullable=False)

    @property
    def password(self):
        raise AttributeError('password: write-only field')

    @password.setter
    def password(self, password):
        self.password_hash = generate_password_hash(password)

    def authenticate(self, password):
        return check_password_hash(self.password_hash, password)

    @staticmethod
    def get_by_username(username):
        return User.query.filter_by(username=username).first()

    def __repr__(self):
        return "<User '{}'>".format(self.username)
