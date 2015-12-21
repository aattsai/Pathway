class CreatePathwayProjects < ActiveRecord::Migration
  def change
    create_table :pathway_projects do |t|
      t.integer :project_id, null: false
      t.integer :pathway_id, null: false

      t.timestamps null:false
    end
  end
end
