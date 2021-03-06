// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName : "table",

  initialize: function() {
    debugger;
    this.collection.on('add remove', this.render, this);
    this.render();

  },

  render: function() {
    // return this.$el;
    debugger;
    this.$el.children().detach();
    return this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        debugger;
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
