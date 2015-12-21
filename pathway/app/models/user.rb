class User < ActiveRecord::Base
  has_secure_password
  validates :first_name, :last_name, :email, :password, :institution, :title, presence: true

  has_many :projects, foreign_key: :researcher_id
  has_many :comments
  has_many :pathway_users
  has_many :pathways, through: :pathway_users
end
