import os

base_dir = os.path.abspath(os.path.dirname(__file__))


class Config(object):
    DEBUG = False
    TESTING = False
    SECRET_KEY = 'video-map-2016'
    WTF_CSRF_ENABLED = True
    WTF_CSRF_SECRET_KEY = 'video-map-2016'
    LOG_FILENAME = '/var/www/video_map/logs/app.log'
    STATIC_FOLDER = '/var/www/video_map/client/static'
    TEMPLATES_FOLDER = '/var/www/video_map/client/templates'
    SQLALCHEMY_TRACK_MODIFICATIONS = True
    SQLALCHEMY_DATABASE_URI = 'postgresql://demouser:youcantguess@localhost:5432/video_map'


class DevelopmentConfig(Config):
    DEBUG = True


class TestingConfig(Config):
    TESTING = True
    WTF_CSRF_ENABLED = False


class ProductionConfig(Config):
    pass

config_by_name = dict(
    dev=DevelopmentConfig,
    test=TestingConfig,
    prod=ProductionConfig
)