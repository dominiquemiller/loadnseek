class Photo < ActiveRecord::Base
  belongs_to :user
  has_many :comments, dependent: :destroy
  mount_uploader :picture, PictureUploader

  scope :search, ->(keyword){ where('lower(title) LIKE ?', "%#{keyword}%") if keyword.present? }
  

end
