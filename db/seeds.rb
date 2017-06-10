# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user1 = User.create(first_name: 'John', last_name: 'Doe', email: 'jd@gmail.com')
user2 = User.create(first_name: 'Jane', last_name: 'Doe', email: 'jd@gmail.com')