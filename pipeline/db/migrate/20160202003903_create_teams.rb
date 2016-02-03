class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.string :institution, null: false
      t.string :description, null: false
      t.string :lead_researcher, null: false
    end
  end
end
