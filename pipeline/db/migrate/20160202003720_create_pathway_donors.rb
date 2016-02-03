class CreatePathwayDonors < ActiveRecord::Migration
  def change
    create_table :pathway_donors do |t|
      t.integer :user_id, null: false
      t.integer :pathway_id, null: false
      t.integer :donated_amount, null: false

      t.timestamps null: false
    end
  end
end
