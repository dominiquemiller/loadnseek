class UsersController < ApplicationController

def uploads
  @user = User.find(params[:id])
  @photos = @user.photos
end

end
