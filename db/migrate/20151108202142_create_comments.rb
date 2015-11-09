class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :body
      t.references :users, index: true, foreign_key: true
      t.references :photos, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
