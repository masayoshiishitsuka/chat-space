json.id         @message.id
json.content    @message.content
json.image      @message.image
json.user_name  @message.user.name
json.created_at @message.create_at.strftime("%Y/%m/%d %H:%M")
