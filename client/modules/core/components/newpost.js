import React from 'react';
import TextField from 'material-ui/lib/text-field';
import Colors from 'material-ui/lib/styles/colors';
import RaisedButton from 'material-ui/lib/raised-button';

const styles = {
  errorStyle: {
    color: Colors.orange500,
  }
};

class NewPost extends React.Component {
  render() {
    const {errors} = this.props;
    const style = {
      margin: 12,
    };
    return (
      <div>
        <TextField
         hintText="Title"
         ref="titleRef"
         errorText={errors.titleError}
         errorStyle={styles.errorStyle}
        /><br/>
        <TextField
         hintText="Content"
         ref="contentRef"
         errorText={errors.contentError}
         errorStyle={styles.errorStyle}
        /><br/>
        <RaisedButton label="Add" style={style} onTouchEnd={this.createPost.bind(this)}/>
      </div>
    );
  }

  createPost(event) {
    // Becaus the test cannot get event argument
    // so call preventDefault() on undefined cause an error
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    const {create} = this.props;
    const {titleRef, contentRef} = this.refs;

    create(titleRef.getValue(), contentRef.getValue());
  }
}

export default NewPost;
