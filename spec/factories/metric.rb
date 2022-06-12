FactoryBot.define do
    factory :metric do
        name { FFaker::Name.name }
        value { rand(1..10) }
        created_on {Time.now}
    end
  end