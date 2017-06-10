require 'roar/decorator'
require 'roar/json'

module UsersRepresenter
  include Representable::JSON::Collection

  items extend: UserRepresenter
end
