class User < ApplicationRecord
    has_secure_password # a bcrypt method to handle encryption
    has_many :tasks, dependent: :destroy
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true
    validates :password_confirmation, presence: true
end
