class User < ApplicationRecord
    has_secure_password # a bcrypt method to handle encryption
    has_many :tasks, dependent: :destroy
end
