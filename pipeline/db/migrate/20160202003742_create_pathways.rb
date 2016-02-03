class CreatePathways < ActiveRecord::Migration
  def change
    create_table :pathways do |t|
      t.integer :user_id, null: false
      t.string :name, null: false
      t.string :description

      t.timestamps null: false
    end
  end
end
