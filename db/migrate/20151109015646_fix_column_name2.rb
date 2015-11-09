class FixColumnName2 < ActiveRecord::Migration
  def change
    rename_column :comments, :photos_id, :photo_id
  end
end
