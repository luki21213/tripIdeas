export default {
  create({Meteor, LocalState, FlowRouter}, title, content) {
    let error = false;
    if (!title) {
      error = true;
      LocalState.set('TITLE_ERROR', 'Title is required!');
    }
    if (!content) {
      error = true;
      LocalState.set('CONTENT_ERROR', 'Content is required!');
    }
    if (error === true) {
      return LocalState;
    }

    LocalState.set('TITLE_ERROR', null);
    LocalState.set('CONTENT_ERROR', null);

    const id = Meteor.uuid();
    // There is a method stub for this in the config/method_stubs
    // That's how we are doing latency compensation
    Meteor.call('posts.create', id, title, content, (err) => {
      if (err) {
        return LocalState.set('SAVING_ERROR', err.message);
      }
    });
    FlowRouter.go(`/post/${id}`);
  },

  clearErrors({LocalState}) {
    LocalState.set('TITLE_ERROR', null);
    LocalState.set('CONTENT_ERROR', null);
    return LocalState;
  }
};
