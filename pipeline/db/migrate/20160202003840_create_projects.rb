class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name, null: false
      t.string :description
      t.string :blog_url
      t.integer :total_amount
      t.integer :score

      t.timestamps null: false
    end
  end
end
