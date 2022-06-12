class CreateMetrics < ActiveRecord::Migration[6.1]
  def change
    create_table :metrics do |t|
      t.string :name
      t.integer :value
      t.timestamp :created_on

      t.timestamps
    end
  end
end
