$(function(){
  function buildHTML(message) {
    var html = `<div class= message>
                  <p class= message__speaker>
                    ${message.user.name}
                  </p>
                  <p class= message__time>
                    ${message.create_at}
                  </p>
                  <p class= message__text>
                    ${message.content}
                    ${message.image}
                  </p>
                </div>`
  return html;
  }
  $('#new_message').on('send-button', function(e){
    e.preventDefault();
    console.log("message")
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.message').apped(html)
      $('.text-box').val('')
      // $('.chat-box').animate({scrollTop: $('.chat-box')[0].scrollHeight}, 'fast');
    })
    .fail(function(){
      alert('error');
    })
    .always(function(data){
      $('.send-button').prop('disabled',false);
    })
  })
  // $(function() {
  //   $('.chat-box').delay(100).animate({
  //     scrollTop: $(document).height()
  //   },1500);
  // });
});
