class Piece < ApplicationRecord
    validates :image_url, :presence => true
end