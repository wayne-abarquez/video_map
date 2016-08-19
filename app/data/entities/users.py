from faker import Factory

fake = Factory.create('en_US')

test_password = 'password123'

test_users = [
    {
        'username': 'admin'
    },
    {
        'username': 'navagis',
        'password': 'realAugData'
    },
    {
        'username': 'localuser',
        'password': 'localuser'
    }
]
