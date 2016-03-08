class AddAvatarToPathways < ActiveRecord::Migration
  def change
    add_column :pathways, :avatar, :string
  end
end
