class PathwayProject < ActiveRecord::Base
  belongs_to :pathway
  belongs_to :project
  
end