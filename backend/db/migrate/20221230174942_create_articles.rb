class CreateArticles < ActiveRecord::Migration[7.0]
  def change
    create_table :articles do |t|
      t.string :title
      t.string :author
      t.string :author_name
      t.string :content
      t.string :img_url

      t.timestamps
    end
  end
end
