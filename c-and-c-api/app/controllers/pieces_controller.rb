class PiecesController < ApplicationController
    def index
        pieces = Piece.all
        render json: pieces.to_json
    end
end