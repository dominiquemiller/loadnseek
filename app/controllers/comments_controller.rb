class CommentsController < ApplicationController
  def create
    @photo = Photo.find(params[:photo_id])
    @comment = @photo.comments.create(comment_params)
    @comment.user = current_user
    redirect_to photo_path(@photo)
  end

  def destroy
    @photo = Photo.find(params[:photo_id])
    @comment = @photo.comments.find(params[:id])
    @comment.destroy
    redirect_to photo_path(@photo)
  end

  def show
  end

  private
    def comment_params
      params.require(:comment).permit(:body, :photo_id, :user_id)
    end
end
