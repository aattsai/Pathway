class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name
      t.string :description
      t.string :blog_url
      t.integer :total_amount
      t.integer :score
    end
  end
end
