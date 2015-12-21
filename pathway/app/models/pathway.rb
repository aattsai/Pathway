class Pathway < ActiveRecord::Base
  validates :name, :description, presence: true

  has_many :pathway_projects
  has_many :projects, through: :pathway_projects
  has_many :pathway_users
  has_many :users, through: :pathway_users
end
