$(function(){
  function buildHTML(message) {
    image = ( message.image ) ? `<img class= "lower-message__image" src=${message.image} >` : "";
    var html = `<div class= message>
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
    console.log("message")
    var formData = new FormData(this);
    var url = $(this).attr('action')
    console.log("koko")
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      console.log("done")
      var html = buildHTML(data);
      $('.chat-box').append(html);
      $('.text-box').val('')
      $('.chat-box').animate({scrollTop: $('.chat-box')[0].scrollHeight}, 'fast');
    })
    .fail(function(){
      alert('error');
    })
    .always(function(data){
      $('.send-button').prop('disabled',false);
    })
  })
});

