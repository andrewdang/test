require 'roar/decorator'
require 'roar/json'

module UserRepresenter
  include Roar::JSON

  property :first_name
  property :last_name
  property :full_name
  property :email

  def full_name
    "#{first_name} #{last_name}"
  end
end
