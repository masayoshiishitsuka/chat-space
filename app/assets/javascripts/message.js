$(function(){
  function buildHTML(message) {
    image = ( message.image ) ? `<img class= "lower-message__image" src=${message.image} >` : "";
    var html = `<div class= message data-id= ${message.id} >
                  <div class= message__speaker>
                    ${message.user_name}
                  </div>
                  <div class= message__time>
                    ${message.created_at}
                  </div>
                  <div class= message__text>
                      ${message.content}
                  </div>
                  ${image}
                </div>`
  return html;
  }
  $('#new_message').on("submit", function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-box').append(html);
      $('#new_message')[0].reset();
      $('.chat-box').animate({scrollTop: $('.chat-box')[0].scrollHeight}, 'fast');
    })
    .fail(function(){
      alert('error');
    })
    .always(function(data){
      $('.send-button').prop('disabled',false);
    })
  })
  var reloadMessages = function() {
    var last_message_id = $('.message').last().data('id');
    $.ajax({
      url: '/groups/:group_id/api/messages',
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      console.log(messages)
      var insertHTML = '';
      messages.forEach(function(message){
        console.log('hi')
        insertHTML = buildHTML(message)
        $('.chat-box').append(insertHTML);
        $('.chat-box').animate({scrollTop: $('.chat-box')[0].scrollHeight}, 'fast');
      })
    })
    .fail(function() {
      console.log('error');
    })
  };
  setInterval(reloadMessages, 5000);
});
