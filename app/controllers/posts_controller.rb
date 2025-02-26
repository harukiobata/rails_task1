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
      flash[:notice] = "新しい予定を追加しました。"
      redirect_to :posts
    else
      flash[:error] = "スケジュールの登録に失敗しました。"
      render "new"
    end
  end

  def show
    @post = Post.find(params[:id])
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(params.require(:post).permit(:title, :start_date, :end_date, :all_day, :schedule_memo))
      flash[:notice] = "#{@post.id}の予定が変更されました。"
      redirect_to :posts
    else
      flash[:error] = "予定の登録に失敗しました。"
      render "edit"
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    flash[:notice] = "予定を削除しました。"
    redirect_to :posts
  end
end
