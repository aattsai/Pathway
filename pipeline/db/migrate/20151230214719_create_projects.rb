class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.integer :goal, null: false
      t.integer :researcher_id, null: false
      t.integer :total_funded, null: false
      t.date :exp_date

      t.timestamps null: false
    end
  end
end
