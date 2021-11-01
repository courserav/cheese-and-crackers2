class PlayersController < ApplicationController
    def index
        players = Player.all
        render json: players.to_json
    end

    def create
        player = Player.new(params.require(:player).permit(:name))
        if (player.save!)
            render json: player.to_json
        end
    end
end