class ArticlesController < ApplicationController
  def index
    articles = Article.all
    render json: articles
  end

  def create
    test = create_params
    print "============================"
    print test
    print "============================="
    article = Article.new(create_params)

    if article.save
      render json: article, status: :created
    else
      render json: article.errors, status: :unproccessable_entity
    end
  end

  def show
    article = Article.find(params[:id])

    render json: article, status: :ok
  end

  def update
    article = Article.find(params[:id])
    article.update(update_params)
    render json: article, status: :ok
  end

  def destroy
    Article.find(params[:id]).destroy!

    render json: "Article Delted"
  end

  private

  def create_params
    params.permit(:title, :author, :author_name, :content, :img_url)
  end

  def update_params
    params.permit(:title, :author, :content, :img_url)
  end

end
