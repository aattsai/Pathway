class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.string :institution
      t.string :description
      t.string :lead_researcher
    end
  end
end
