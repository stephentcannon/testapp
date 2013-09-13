if (Meteor.isClient) {
  Template.left_menu.events = ({
    'click #switch_map_list_btn' : function(event, template){
      if(Session.equals('show_list_view', false)){
        Session.set('show_list_view', true);
        //template.find('#switch_map_list_btn').innerHTML= 'BLAH';
        $("#switch_map_list_btn").html("BLAH");
      }else{
        Session.set('show_list_view', false);
        // template.find('#switch_map_list_btn').innerHTML = 'BLAH2';
        $("#switch_map_list_btn").html("BLAH2");
      }
    }
  });
}

