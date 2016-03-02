class Project < ActiveRecord::Base
  has_many :pathway_projects
  has_many :user_projects
  has_one :team

  validates :name, presence: true
end