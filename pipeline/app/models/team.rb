class Team < ActiveRecord::Base
  belongs_to :project

  validates :institution, :description, :lead_researcher, presence: true
end