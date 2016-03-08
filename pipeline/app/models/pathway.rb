class Pathway < ActiveRecord::Base
  belongs_to :user
  has_many :pathway_donors
  has_many :pathway_projects

  validates :name, presence: true

  mount_uploader :avatar, AvatarUploader
end