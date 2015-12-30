class CreatePathwayUsers < ActiveRecord::Migration
  def change
    create_table :pathway_users do |t|
      t.integer :pathway_id, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end
  end
end
