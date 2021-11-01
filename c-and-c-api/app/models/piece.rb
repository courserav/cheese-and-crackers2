class Piece < Application record
    validates :image_url, :presence => true
end