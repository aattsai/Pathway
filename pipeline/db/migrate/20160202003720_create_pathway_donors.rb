class CreatePathwayDonors < ActiveRecord::Migration
  def change
    create_table :pathway_donors do |t|
      t.integer :user_id
      t.integer :pathway_id
      t.integer :donated_amount
    end
  end
end
