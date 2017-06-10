class UsersController < ApplicationController
  before_action :set_todo, only: [:update, :destroy]

  def index
    @user = (User.last || User.new).extend(UserRepresenter).to_json
    @users = User.all.extend(UsersRepresenter).to_json if User.all.any?
  end
end
