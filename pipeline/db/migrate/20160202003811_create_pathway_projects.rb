class CreatePathwayProjects < ActiveRecord::Migration
  def change
    create_table :pathway_projects do |t|
      t.integer :project_id
      t.integer :pathway_id
      t.integer :donated_weight
    end
  end
end
