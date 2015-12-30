class PathwayUser < ActiveRecord::Base
  belongs_to :user
  belongs_to :pathway

end
