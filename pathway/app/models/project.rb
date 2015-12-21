class Project < ActiveRecord::Base
  validates :name, :description, :goal, :total_funded, :researcher_id, presence: true
  has_many :comments
  has_many :pathway_projects
  has_many :pathway, through: :pathway_projects
  belongs_to :researcher, class_name: :User
end
