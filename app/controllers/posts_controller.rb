class PostsController < ApplicationController
  def index
    @posts = Post.all
    @post_count = Post.count
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(params.require(:post).permit(:title, :start_date, :end_date, :all_day, :schedule_memo))
    if @post.save
      flash[:notice] = "新しい予定を追加しました"
      redirect_to :posts
    else
      render "new"
    end
  end

  def show
    @post = Post.find(params[:id])
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
