---
layout: page
title: Contact Us
sort: 3
---
All engagements at Tiny Quark start with an initial free consult. Let us know what you're working on—we'll think through it together and see if we can help out. If it's not right for us, we'll help you figure out what your next steps might be. **We like to help—reach out to us below**.

<section>
<form name="quark-contact" id="theForm" class="simform" autocomplete="off" action="https://formkeep.com/f/8777cebca13e" method="POST">
  <div class="simform-inner">
    <ol class="questions">
      <li>
        <span><label for="q1">Name</label></span>
        <input id="q1" name="q1" type="text"/>
      </li>
      <li>
        <span><label for="q2">Email Address</label></span>
        <input id="q2" name="q2" type="text"/>
      </li>
      <li>
        <span><label for="q3">What would you like to talk about?</label></span>
        <input id="q3" name="q3" type="text"/>
      </li>
    </ol><!-- /questions -->
    <button class="submit" type="submit">Send answers</button>
    <div class="controls">
      <button class="next">▶</button>
      <div class="progress"></div>
      <span class="number">
        <span class="number-current"></span>
        <span class="number-total"></span>
      </span>
      <span class="error-message"></span>
    </div><!-- / controls -->
  </div><!-- /simform-inner -->
  <span class="final-message"></span>
</form><!-- /simform -->
</section>
<script>
      var theForm = document.getElementById( 'theForm' );

      new stepsForm( theForm, {
        onSubmit : function( form ) {
          // hide form
          classie.addClass( theForm.querySelector( '.simform-inner' ), 'hide' );
              event.preventDefault();

    var formEl = $('#theForm');
    var submitButton = $('input[type=submit]', formEl);

    $.ajax({
      type: 'POST',
      url: formEl.prop('action'),
      accept: {
        javascript: 'application/javascript'
      },
      data: formEl.serialize(),
      beforeSend: function() {
        submitButton.prop('disabled', 'disabled');
      }
    }).done(function(data) {
      submitButton.prop('disabled', false);
    });
          /*
          form.submit()
          or
          AJAX request (maybe show loading indicator while we don't have an answer..)
          */

          // let's just simulate something...
          var messageEl = theForm.querySelector( '.final-message' );
          messageEl.innerHTML = 'Thank\’s, for reaching out. We\'ll get back to you as soon as we can.';
          classie.addClass( messageEl, 'show' );
        }
      } );
    </script>
