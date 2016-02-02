class CreatePathways < ActiveRecord::Migration
  def change
    create_table :pathways do |t|
      t.integer :user_id
      t.string :name
      t.string :description
    end
  end
end
